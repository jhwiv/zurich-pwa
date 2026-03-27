# Site Version Matrix — Parallel Development Tracker

Last updated: 27 March 2026

## Current Versions

| Site | URL | Repo | Version | Updated |
|------|-----|------|---------|---------|
| Zürich Weekend | [zurich-weekend.com](https://www.zurich-weekend.com) | `jhwiv/zurich-pwa` | **v3.26** | 27 Mar 2026 |
| Maritimes Grand Loop | [maritimesgrandloop.com](https://maritimesgrandloop.com) | `jhwiv/maritimes-pwa` | **v1.6** | 27 Mar 2026 |

## Shared Feature Parity

Features that exist on both sites. If a cell shows ✗, that feature hasn't been ported yet.

| Feature | ID | Zürich | Maritimes | Notes |
|---------|----|--------|-----------|-------|
| Weather cards (basic) | `WX_CARDS` | ✓ | ✓ | Live Open-Meteo data |
| Expandable weather phone modal | `WX_PHONE_MODAL` | ✓ | ✓ | Tap card → phone mockup |
| Street View section (curated photos) | `SV_PHOTOS` | ✓ | ✓ | Static images per location |
| Street View overlay button | `SV_OVERLAY_BTN` | ✓ v3.17 | ✓ v1.1 | Gold pill button on images |
| Street View iframe modal | `SV_IFRAME_MODAL` | ✓ v3.19 | ✓ v1.1 | Inline Google SV embed |
| Interactive route map (Leaflet) | `MAP_LEAFLET` | ✓ | ✓ | Day filtering, popups |
| Interest chip popups | `CHIP_POPUPS` | ✓ | ✓ | Tap chip → info modal |
| Trip Concierge chat | `CHAT_CONCIERGE` | ✓ | ✓ | AI chat FAB button |
| Live webcam buttons | `WEBCAM_BTN` | ✓ v3.20 | ✓ v1.2 | New-tab links where webcam available |
| Webcam iframe overlay | `WEBCAM_IFRAME` | ✓ v3.21 | ✓ v1.3 | Inline embed for embeddable cams |
| Alterra branding | `BRANDING` | ✓ | ✓ | Hero + footer |
| History tab (accordion) | `HISTORY_TAB` | ✓ | ✓ | Collapsible entries |
| Local search presets (grid) | `LOCAL_PRESETS` | ✓ v3.22 | ✓ v1.6 | Category grid with SVG icons |
| Full-screen local search overlay | `LOCAL_FULLSCREEN` | ✓ v3.23 | ✓ v1.6 | Search bar, map preview, POI cards, bottom nav |
| GPS & time awareness | `GPS_TIME_AWARE` | ✓ v3.24 | ✓ v1.4 | Location-aware search & chat |
| GPS status tracking | `GPS_STATUS_FIX` | ✓ v3.25 | ✓ v1.5 | Permission tracking, await on first send |
| Shared GPS cache | `GPS_CACHE_SHARED` | ✓ v3.24 | ✓ v1.6 | 5-min cache shared by search + chat |
| City-aware search + POI fix | `SEARCH_CITY_POI` | ✓ v3.26 | ✓ v1.6 | Itinerary-date city fallback, POI image error handling |
| Enhanced Overpass search | `OVERPASS_ENHANCED` | ✓ v3.26 | ✓ v1.6 | POST method, retry logic, expanded TAG_MAP (57 entries) |
| Pronunciation guide | `PRONUNCIATION` | ✓ | ✗ | Danish + Swiss German (Zürich-specific) |
| Transit / ticket info | `TRANSIT_TAB` | ✓ | ✗ | Zürich Card, metro, etc. (Zürich-specific) |
| Actual road routes (OSRM) | `MAP_ROADS` | ✗ | ✓ | Maritimes driving routes |
| Ferry crossing lines | `MAP_FERRY` | ✗ | ✓ | Dashed lines for ferries |

## How to Use

Tell Computer: **"Compare versions of Maritimes and Zürich and make sure both are on the most current version."**

Computer will:
1. Pull latest from both repos
2. Read `VERSION.md` in each
3. Read this matrix (`SITE_VERSIONS.md`)
4. Identify any features present on one site but missing from the other
5. Report what needs to be ported and in which direction
