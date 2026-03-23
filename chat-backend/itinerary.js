// Full Zürich + Copenhagen itinerary extracted from the PWA
// Used as context for the LLM when answering traveler questions

const ITINERARY = {
  trip: {
    title: "Zürich · March 2026",
    subtitle: "Father–daughter trip — visiting Charlotte while she's studying in Copenhagen, then a Zürich weekend",
    dates: "26–29 March 2026",
    hotel: {
      name: "Zürich Marriott Hotel",
      address: "Neumühlequai 42, Zürich",
      phone: "+41 44 360 70 70",
      lat: 47.3812,
      lng: 8.5387,
      homeStop: "Sihlquai/HB — 3 min walk",
      note: "Bahnhofquai/HB stop closed until Dec 2026"
    },
    emergency: { any: 112, ambulance: 144, police: 117, fire: 118, doctor: 111 },
    zurichCard: "72-hr, CHF 56 pp — covers all trams, trains, buses, boats, Uetliberg, Polybahn, 40+ museums",
    flight: { code: "ZRH", time: "8:25 PM Sunday 29 March", leaveHotel: "6:00 PM sharp", airportExpress: "25 min from HB" }
  },

  days: [
    {
      id: "denmark",
      label: "Copenhagen Stopover",
      dateRange: "Wed 25 – Fri 27 March",
      city: "Copenhagen",
      lat: 55.6761,
      lng: 12.5683,
      stops: [
        { time: "Wed Night", title: "Departure → Copenhagen ✈", desc: "Overnight flight departing Wednesday night. Arrive Copenhagen (CPH) Thursday morning at 7 AM.", tags: ["✈ Overnight flight", "🕖 Arrive Thu 7 AM"] },
        { time: "7:00 AM Thu", title: "Arrive CPH → Scandic Nørreport", desc: "Metro M2 from Terminal 3 to Nørreport Station — 13 minutes, 30 DKK (~$4). Hotel directly across the street.", address: "Frederiksborggade 18", tags: ["🚇 M2 Metro · 13 min", "💰 30 DKK (~$4)"] },
        { time: "Hotel", title: "Scandic Nørreport · Your Base", desc: "Boutique 4-star hotel. Rooftop bar Level Six on 6th floor with panoramic views. Free happy hour 4–5 PM. Breakfast buffet included.", phone: "+45 7231 5001", tags: ["🍸 Rooftop Bar · Level Six", "🥐 Breakfast included", "🎉 Free happy hour 4–5 PM"] },
        { time: "Charlotte", title: "Charlotte's Place · Amager", desc: "Charlotte's place while studying in Copenhagen. Holmbladsgade 70B, 2300 København S. Amagerbro neighborhood — 15 min from hotel by M2 metro to Amagerbro station then 5-min walk.", address: "Holmbladsgade 70B", tags: ["🚇 M2 → Amagerbro · 15 min"] },
        { time: "Fri Evening", title: "Copenhagen → Zürich ✈", desc: "Fly CPH to ZRH Friday evening. M2 metro from Nørreport to airport takes 13 min.", tags: ["✈ CPH → ZRH", "🚇 M2 → Airport · 13 min"] }
      ]
    },
    {
      id: "friday",
      label: "Day 1 · Friday 27 March",
      title: "Arrival & White Elephant",
      city: "Zürich",
      lat: 47.3769,
      lng: 8.5417,
      stops: [
        { time: "7:40 PM", title: "Airport → Zürich Marriott Hotel", desc: "Collect bags. Activate Zürich Card in the app. Airport Express to HB every 10 min — 10-min ride. Tram 13 one stop to Sihlquai/HB. Hotel is 3 min walk. Arrive ~8:30–8:45 PM.", tags: ["🚆 Airport Express + Tram 13", "⏱ 30–40 min door-to-door"] },
        { time: "9:00 PM", title: "Dinner: White Elephant", desc: "Hotel's Michelin-listed Thai restaurant — one of Zürich's best Thai tables since 1991. Staffed entirely by Thai chefs. Rich curries, aromatic soups. 🌿 Extensive vegetarian & vegan menu.", phone: "+41 44 360 73 22", tags: ["🍽 On-site", "🌿 Vegetarian-friendly", "⏱ Dinner 6–10 PM"] },
        { time: "10:30 PM", title: "Lenox Bar Nightcap", desc: "Hotel's New York-inspired bar — rare whiskies, craft cocktails. One drink, then bed.", optional: true, tags: ["🥃 On-site", "⏱ Open late"] }
      ],
      extras: "Short riverfront walk along the Limmat before bed — lit bridges at night, 5 min from hotel."
    },
    {
      id: "saturday",
      label: "Day 2 · Saturday 28 March — The Big Day",
      title: "Mountain, Art & Old Town",
      summary: "Uetliberg → Sprüngli → Kunsthaus → Old Town → Lindenhof → aperitivo → Zeughauskeller. No hotel return before dinner. Leave hotel at 10:00 AM.",
      city: "Zürich",
      lat: 47.3769,
      lng: 8.5417,
      stops: [
        { time: "10:00 AM", title: "Uetliberg Summit · 871 m", desc: "Zürich's local mountain — S10 train from HB takes 20 min. Walk 10 min to summit tower: Alps panorama, Lake Zürich. Zürich Card covers fully.", lat: 47.3497, lng: 8.4916, tags: ["🚆 S10 from HB", "⏱ 20 min", "🎫 Zürich Card ✓"], alt: { foggy: "Polybahn + ETH Terrace — 90-second funicular ride, great rooftop views, no altitude fog risk. Free with Zürich Card.", rainy: "Landesmuseum instead — behind HB, free with Zürich Card, Sat 10 AM–5 PM. Then Kunsthaus at 1:30 PM." }, note: "⚠️ Felsenegg cable car CLOSED 2 Mar–10 Apr 2026" },
        { time: "12:45 PM", title: "Café Sprüngli", desc: "Zürich's legendary confiserie since 1836. Legendary hot chocolate. Luxemburgerli macarons — seasonal, bite-sized.", address: "Bahnhofstrasse 21", lat: 47.3692, lng: 8.5378, tags: ["🚶 12 min walk from HB", "🌿 Vegetarian", "⏱ Sat 7:30 AM–6:30 PM"] },
        { time: "1:30 PM", title: "Kunsthaus Zürich", desc: "Switzerland's largest art museum. Bührle Collection (Monet, Cézanne, Renoir), Munch (largest outside Norway), Giacometti, Pipilotti Rist. Plan two hours. Free with Zürich Card.", address: "Heimplatz 1", lat: 47.3703, lng: 8.5489, tags: ["🎨 Museum", "🎫 Zürich Card ✓ free", "⏱ Sat–Sun 10 AM–6 PM"] },
        { time: "3:00 PM", title: "Lunch: Kunsthaus Café", desc: "Light lunches — soups, salads, open sandwiches. Part of the museum experience. 🌿 Good vegetarian options.", tags: ["🍽 On-site", "⏱ Open Sat 9 AM–9 PM"] },
        { time: "4:15 PM", title: "Old Town — Augustinergasse & Cathedrals", desc: "Zürich's most photographed medieval lane. Grossmünster (twin-towered cathedral, begun 1100s). Fraumünster with Marc Chagall's stained glass. Münsterhof square.", lat: 47.3700, lng: 8.5413, tags: ["🚶 18 min walk from Kunsthaus", "⛪ Both free entry", "⏱ Sat 10 AM–5 PM"] },
        { time: "5:45 PM", title: "Lindenhof Hill — Best Panorama", desc: "Former Roman fort hilltop park. Panoramic views over the Limmat and Old Town rooftops. Large public chessboard. Late afternoon March light.", lat: 47.3727, lng: 8.5400, tags: ["🚶 5 min from Fraumünster", "🆓 Always open, free"] },
        { time: "6:30 PM", title: "Pre-Dinner Drinks: Café Bar Münsterhof", desc: "Münsterhof square. Order a Spritz or local wine. Watch the square settle into evening.", address: "Münsterhof 6", tags: ["🚶 5 min from Lindenhof"] },
        { time: "7:30 PM", title: "Dinner: Zeughauskeller", desc: "Zürich's most famous beer-hall restaurant, in a 15th-century former armory on Bahnhofstrasse. Excellent Zürcher Geschnetzeltes. 🌿 Älplermagronen (Alpine macaroni). CONFIRMED reservation 7:30 PM.", address: "Bahnhofstrasse 28A", phone: "+41 44 220 15 15", confirmed: true, lat: 47.3699, lng: 8.5378, tags: ["🚶 3 min from Münsterhof", "💰 CHF 35–55 pp", "⏱ Reservation 7:30 PM"] }
      ],
      extras: "Niederdorf lanes, Cabaret Voltaire on Spiegelgasse (birthplace of Dada), Beyer Watch Museum (free, basement), or linger in the Giacometti room."
    },
    {
      id: "sunday",
      label: "Day 3 · Sunday 29 March · Palm Sunday",
      title: "Slow Morning & Farewell",
      summary: "The breathing day — unhurried. Leave hotel by 6:00 PM sharp. Full city window: 10 AM–4:30 PM.",
      city: "Zürich",
      lat: 47.3769,
      lng: 8.5417,
      stops: [
        { time: "10:00 AM", title: "Breakfast: Hiltl", desc: "World's oldest vegetarian restaurant (est. 1898). Sunday brunch buffet — 100+ dishes: Indian curries, Middle Eastern mezze, Swiss cheese boards, fresh pastries. CHF 57 pp all-inclusive.", address: "Sihlstrasse 28", lat: 47.3744, lng: 8.5370, tags: ["🚶 8 min from hotel", "🌿 All vegetarian", "⏱ Brunch 9:30 AM–2:30 PM"] },
        { time: "11:15 AM", title: "Lake Zürich Promenade", desc: "Quaianlagen park from Bürkliplatz: swans, sailboats, Alps views on clear days. Unscheduled downtime.", lat: 47.3657, lng: 8.5413, tags: ["🚶 12 min S from Hiltl", "🆓 Free"] },
        { time: "11:45 AM", title: "Lake Zürich Boat Cruise", desc: "ZSG short Rundfahrt from Bürkliplatz — ~40 min. Covered by Zürich Card. Spectacular on sunny mornings.", optional: true, tags: ["⛵ Bürkliplatz pier", "🎫 Zürich Card ✓", "⏱ ~40 min"] },
        { time: "Bonus", title: "Polybahn Funicular", desc: "Historic 90-second funicular from Central to ETH Zürich. One of the best rooftop views. Free with Zürich Card. 15–20 min total.", optional: true, tags: ["🚠 Rämistrasse 101", "🎫 Zürich Card ✓", "⏱ 15–20 min"] },
        { time: "1:00 PM", title: "Lunch: Fischerstube Zürihorn", desc: "Lakeside terrace directly over the water. Seasonal Swiss fish from Lake Zürich. 🌿 Vegetarian options.", address: "Bellerivestrasse 160", phone: "+41 44 422 25 20", lat: 47.3537, lng: 8.5562, tags: ["🚃 Tram 2 → Zürichhorn (10 min)", "🎫 Zürich Card ✓", "💰 CHF 35–50 pp"] },
        { time: "2:30 PM", title: "Museum Rietberg", desc: "Asian, African & Oceanic art in historic villas in Rieter Park. Underground Emerald extension. Free with Zürich Card.", address: "Gablerstrasse 15", lat: 47.3598, lng: 8.5293, tags: ["🚕 Uber ~10 min", "🎫 Zürich Card ✓ free", "⏱ Sun 10 AM–5 PM"] },
        { time: "5:15 PM", title: "Farewell Dinner: eCHo", desc: "Hotel's Swiss restaurant — Züri Gschnätzlets, cheese fondue, regional produce. Finish by 6:00 PM.", phone: "+41 44 360 73 18", tags: ["🍽 On-site, Marriott", "💰 CHF 45–70 pp"] },
        { time: "6:00 PM", title: "Depart for ZRH Airport", desc: "Leave hotel by 6:00 PM. Walk 5 min to HB → Airport Express (25 min) → ZRH by 6:30 PM. Flight departs 8:25 PM.", critical: true, tags: ["🚆 Airport Express from HB", "⏱ 25 min to ZRH", "🎫 Zürich Card ✓"] }
      ],
      extras: "Choose ONE optional: boat cruise (~40 min) or Polybahn (~20 min). Not both. Do NOT add stops after 3:30 PM.",
      warnings: [
        "Almost all shops closed on Sunday. Buy anything you need Saturday before 6 PM.",
        "March 29 is Palm Sunday — Old Town processions and Grossmünster services.",
        "Leave hotel by 6:00 PM. Flight ZRH 8:25 PM."
      ]
    }
  ],

  dining: [
    { time: "Fri 9 PM", venue: "White Elephant (hotel)", status: "Recommended", phone: "+41 44 360 73 22" },
    { time: "Sat 12:45 PM", venue: "Café Sprüngli", status: "Walk-in" },
    { time: "Sat 3 PM", venue: "Kunsthaus Café", status: "Walk-in" },
    { time: "Sat 6:30 PM", venue: "Café Bar Münsterhof", status: "Walk-in" },
    { time: "Sat 7:30 PM", venue: "Zeughauskeller ★", status: "✓ Confirmed · 7:30 PM", phone: "+41 44 220 15 15" },
    { time: "Sun 10 AM", venue: "Hiltl", status: "Walk-in — arrive early" },
    { time: "Sun 1 PM", venue: "Fischerstube Zürihorn", status: "Recommended", phone: "+41 44 422 25 20" },
    { time: "Sun 5:15 PM", venue: "eCHo farewell (hotel)", status: "Book via hotel", phone: "+41 44 360 73 18" }
  ],

  budget: {
    zurichCard: "CHF 56",
    sprungli: "CHF 15–20",
    zeughauskeller: "CHF 35–55",
    hiltl: "CHF 57",
    fischerstube: "CHF 35–50",
    echo: "CHF 45–70",
    total: "CHF 260–325 pp"
  },

  transit: [
    { dest: "Hotel from Airport", via: "Airport Express + Tram 13", time: "30–40 min" },
    { dest: "Uetliberg Summit", via: "S10 from HB tracks 21/22 · Zürich Card ✓", time: "20 min" },
    { dest: "Café Sprüngli", via: "Walk from HB or Tram 13 → Paradeplatz", time: "12/5 min" },
    { dest: "Kunsthaus", via: "Tram 3 Paradeplatz → Kunsthaus", time: "11 min" },
    { dest: "Old Town / Fraumünster", via: "Walk south via Grossmünster", time: "15 min" },
    { dest: "Zeughauskeller", via: "Walk 3 min N from Münsterhof", time: "3 min" },
    { dest: "Hotel after dinner", via: "Tram 13 Paradeplatz → Sihlquai/HB", time: "5 min" },
    { dest: "Bürkliplatz / Lake", via: "Tram 7 → Bürkliplatz", time: "9 min" },
    { dest: "Fischerstube Zürihorn", via: "Tram 2 Bürkliplatz → Zürichhorn", time: "10 min" },
    { dest: "Museum Rietberg", via: "Tram 7 or Uber", time: "16 min" },
    { dest: "ZRH Airport (Sunday)", via: "Airport Express from HB · Zürich Card ✓", time: "25 min" }
  ]
};

module.exports = ITINERARY;
