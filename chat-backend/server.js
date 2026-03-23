#!/usr/bin/env node
// Chat backend for Zürich Weekend PWA
// Express server — calls Open-Meteo + Anthropic LLM

const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
const { getWeather } = require('./weather');
const ITINERARY = require('./itinerary');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const anthropic = new Anthropic();

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message, lat, lng, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing message' });
  }

  try {
    // 1. Get weather for Zürich (primary) and optionally user location
    const zurichWeather = await getWeather(47.3769, 8.5417, 'Europe/Zurich');
    const copenhagenWeather = await getWeather(55.6761, 12.5683, 'Europe/Copenhagen');

    let userLocationNote = '';
    if (lat && lng) {
      // Determine which city they're closer to
      const dZurich = Math.hypot(lat - 47.3769, lng - 8.5417);
      const dCopenhagen = Math.hypot(lat - 55.6761, lng - 12.5683);
      userLocationNote = `User's current GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)}. `;
      if (dZurich < 0.5) {
        userLocationNote += 'They appear to be IN Zürich right now. ';
      } else if (dCopenhagen < 0.5) {
        userLocationNote += 'They appear to be IN Copenhagen right now. ';
      } else {
        userLocationNote += 'They are NOT currently in Zürich or Copenhagen — they may be planning ahead. ';
      }
    }

    // 2. Build the system prompt
    const systemPrompt = buildSystemPrompt(zurichWeather, copenhagenWeather, userLocationNote);

    // 3. Build message history for Claude
    const messages = [];
    if (history && Array.isArray(history)) {
      for (const h of history.slice(-8)) { // Keep last 8 exchanges
        messages.push({ role: h.role, content: h.content });
      }
    }
    messages.push({ role: 'user', content: message });

    // 4. Call Claude
    const response = await anthropic.messages.create({
      model: 'claude_sonnet_4_6',
      max_tokens: 800,
      system: systemPrompt,
      messages
    });

    const reply = response.content[0].text;
    res.json({ reply });

  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

function buildSystemPrompt(zurichWx, copenhagenWx, locationNote) {
  const now = new Date();
  const localZurich = now.toLocaleString('en-US', { timeZone: 'Europe/Zurich', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });

  let wxSummary = '';
  if (zurichWx) {
    wxSummary += `\n\nCURRENT ZÜRICH WEATHER: ${zurichWx.current.temp}°F, ${zurichWx.current.condition}, Wind ${zurichWx.current.windMph} mph, Humidity ${zurichWx.current.humidity}%.`;
    if (zurichWx.hourly.length > 0) {
      wxSummary += '\nNEXT HOURS:';
      for (const h of zurichWx.hourly.slice(0, 6)) {
        wxSummary += `\n  ${h.hour}:00 — ${h.temp}°F, ${h.condition}, ${h.rainChance}% rain, Wind ${h.windMph} mph`;
      }
    }
    if (zurichWx.daily.length > 0) {
      wxSummary += '\nDAILY FORECAST:';
      for (const d of zurichWx.daily) {
        wxSummary += `\n  ${d.date}: Hi ${d.hi}°F / Lo ${d.lo}°F, ${d.condition}, ${d.rainChance}% rain`;
      }
    }
  }
  if (copenhagenWx) {
    wxSummary += `\n\nCOPENHAGEN: ${copenhagenWx.current.temp}°F, ${copenhagenWx.current.condition}.`;
  }

  return `You are a knowledgeable, friendly travel concierge for a Zürich & Copenhagen trip (26–29 March 2026). You are embedded in the trip's PWA guide.

CURRENT DATE/TIME (Zürich): ${localZurich}
${locationNote}
${wxSummary}

FULL ITINERARY:
${JSON.stringify(ITINERARY, null, 1)}

YOUR ROLE:
- Help the traveler decide what to do next based on: the itinerary, current time, weather, and their location.
- If it's going to rain during an outdoor activity, proactively suggest the indoor alternative from the itinerary.
- Be specific — use times, names, addresses, and walking distances from the itinerary.
- For Uetliberg: if foggy/rainy, suggest Polybahn + ETH Terrace or Landesmuseum instead (the itinerary has these alternatives).
- For Sunday: always remind them about the 6:00 PM hotel departure and 8:25 PM flight if relevant.
- Reference restaurants by name and confirmed reservation times.
- Keep answers concise — 2-4 short paragraphs max. Use natural language, not bullet lists.
- You can respond in English or match the traveler's language.
- If they ask about something not in the itinerary, give helpful local advice but note it's outside the planned itinerary.
- DO NOT make up information. If you don't know, say so.`;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Chat backend running on port ${PORT}`);
});
