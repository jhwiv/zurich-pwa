# Zürich Weekend — Version History

**Site:** [zurich-weekend.com](https://www.zurich-weekend.com)
**Repo:** [jhwiv/zurich-pwa](https://github.com/jhwiv/zurich-pwa)
**Deploy:** Cloudflare Pages (auto-deploy from main)
**Current:** v4.12

| Version | Date | Feature | Shared Feature ID |
|---------|------|---------|-------------------|
| v4.12 | 2026-03-29 | Add transit walking direction buttons — when a stop mentions an alternative tram, a green "Walk to Tram" button links to walking directions to the tram stop (Sprüngli, Kunsthaus, Hiltl, Museum Rietberg) | `WALK_TO_TRAM_BTN` |
| v4.11 | 2026-03-29 | Sunday departure: Uber to ZRH replaces Airport Express — all references updated (flight bar, departure stop, transit table, chat backend, tip blocks) | `UBER_DEPARTURE` |
| v4.10 | 2026-03-29 | Add subtle Uber alternative notes for walks ≥15 min — Nyhavn (19 min), Hiltl (18 min), Kunsthaus (15 min), Old Town (15 min), Reffen (15 min from metro), Little Mermaid (30 min), Union Kitchen (15 min) | `WALK_UBER_NOTE` |
| v4.7 | 2026-03-29 | Fix all walking time estimates — cross-referenced with Google Maps Directions API. 25+ walk times corrected (e.g. Marriott→Hiltl 8→18 min, Hotel→Nyhavn 10→19 min, Kunsthaus→Old Town 18→13 min) | `WALK_TIMES_FIX` |
| v4.6 | 2026-03-29 | Fix overnight star visibility: offset position + raised z-index so star doesn't hide behind overlapping stop markers | `MAP_DYN_HEADING` |
| v4.5 | 2026-03-29 | Dynamic map heading: day-of-week hat + "Itinerary Map Locations" title during trip; gold star marker for previous night's hotel | `MAP_DYN_HEADING` |
| v4.4 | 2026-03-29 | Remove airport stops from map — no airport markers, route lines, or flight path | `MAP_NO_AIRPORTS` |
| v4.3 | 2026-03-29 | Time-aware map: auto-filter to today's stops when opened during the trip | `MAP_TIME_AWARE` |
| v4.2 | 2026-03-28 | Saturday reschedule: noon Uetliberg arrival, cascade all times through dinner | `SAT_RESCHEDULE` |
| v4.1 | 2026-03-28 | Reskin: dark navy → light cream theme across all pages | `LIGHT_THEME` |
| v3.16 | 2026-03-20 | Fix broken street view images | — |
| v3.17 | 2026-03-25 | Street View overlay button on image cards | `SV_OVERLAY_BTN` |
| v3.18 | 2026-03-25 | Street View popup window (superseded by v3.19) | — |
| v3.19 | 2026-03-25 | Street View inline iframe modal | `SV_IFRAME_MODAL` |
| v3.20 | 2026-03-25 | Live webcam buttons (11 destinations) | `WEBCAM_BTN` |
| v3.21 | 2026-03-25 | Webcam iframe overlay for embeddable cams | `WEBCAM_IFRAME` |
| v3.22 | 2026-03-25 | Local search presets match Maritimes style | `LOCAL_PRESETS` |
| v3.23 | 2026-03-25 | Full-screen local search overlay with grid buttons, map, POI cards | `LOCAL_FULLSCREEN` |
| v3.24 | 2026-03-27 | GPS & time awareness for chat concierge and local search | `GPS_TIME_AWARE` |
| v3.25 | 2026-03-27 | Fix GPS: track permission status, await resolution before chat send | `GPS_STATUS_FIX` |
| v3.26 | 2026-03-27 | Fix search: itinerary-date city fallback, fix broken POI images | `SEARCH_CITY_POI` |
| v3.27 | 2026-03-27 | Render markdown links as clickable hyperlinks in chat | `CHAT_MD_LINKS` |
| v3.28 | 2026-03-27 | Floating time pill widget — shows away vs home timezone when offset differs | `TIME_PILL` |
| v3.29 | 2026-03-27 | Time pill: home = US Eastern; away follows itinerary (CPH → Zürich) | `TIME_PILL` |
| v3.30 | 2026-03-27 | Time pill: raise above FABs to avoid overlap on mobile | `TIME_PILL` |
| v3.31 | 2026-03-27 | Time pill: more clearance above FABs on mobile | `TIME_PILL` |
| v3.32 | 2026-03-27 | Time pill: smaller icons/text, repositioned to lower-right corner | `TIME_PILL` |
| v3.36 | 2026-03-27 | Restaurant menu pop-ups: replace inline Union Kitchen menu with modal button, add menu buttons for all 6 restaurants (Union Kitchen, White Elephant, Zeughauskeller, Hiltl, Fischerstube, eCHo) with full menus sourced from official websites | `MENU_POPUP` |
| v3.37 | 2026-03-27 | Remove map preview & explore cards from search; add bidirectional toggle between Local Search and Trip Concierge | `SEARCH_CONCIERGE` |
| v3.38 | 2026-03-27 | Add menu pop-ups for all remaining dining/drink stops: Café Sprüngli, Kunsthaus Café, Café Bar Münsterhof (Caffè Belpaese), Lenox Bar — now 10 total menu buttons | `MENU_POPUP` |
| v4.0 | 2026-03-27 | Unified version number with Maritimes PWA — full feature parity achieved | — |
