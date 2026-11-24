# ParkCalm Instagram posting kit

Written by Claude for Lew on 2026-11-24. Used by the scheduled task "ParkCalm Instagram post maker". Modelled on the Shop Ledger kit. Lew may edit this file; where it and the task's prompt disagree, this file wins for facts and look, the prompt wins for process.

## What is in this folder (kit/ in the parkcalm-media repo)
- `style.css`: the look. Every post HTML links it as `../style.css`.
- `examples/`: five reference posts (HTML + rendered JPG). Copy their structure, never their exact words.
  - `explainer-cream.html`, `explainer-ink.html`: kicker, headline, app screenshot, one-line note.
  - `tip-list.html` (headline + rows + one accent line), `tip-statement.html` (one big line + one sentence), `tip-number.html` (one big number or date).
- `shots/`: real ParkCalm screenshots taken on a phone-sized screen on 24 Nov 2026. Safe to publish (no personal data).
  - `reco-card.png`: "Tu mejor opción" card over the map (Parking Náutico Cíes, 5 min a pie, Alta fiabilidad 90%, 100/180 plazas libres, Navegar).
  - `garage-list.png`: top of the Parkings list (13 parkings, total free spaces) with the Parking Vialia Interior card: free spaces out of total, % full, 5 min, €1.90/h, Reservar and Navegar.
  - `zbe-check.png`: the "Zona de Bajas Emisiones de Vigo" sheet: pick your DGT label (0, ECO, C, B, none), zones Centro, Praza de Portugal, Bouzas, Calvario.
  - `live-map.png`: the map with coloured spots for street parking and the ZBE outline, search box and Parking/Bus/Carga-Descarga/Comunidad chips.
  - `navidad-page.png`: the "¿A dónde vas?" search box from the Christmas guide page (parkcalm.com/navidad-vigo), with Buscar aparcamiento and quick picks Porta do Sol, Praza de Compostela, Gran Vía, Príncipe, Vialia.
  - `zbe-page.png`: the ZBE page: "¿Puede entrar tu coche?" label buttons and the map of Vigo's ZBE zones.
  - Lew may add more PNGs. Only use one after looking at it, and never one that shows a person's name, email, phone, plate number or location history.
- `posts/`: one HTML (+ PNG and JPG, not committed) per post, named `YYYY-MM-DD-a` (2:00 PM slot) and `YYYY-MM-DD-b` (7:00 PM slot).
- `post-log.md`: every post made. Read before writing, update after queueing.
- `render.mjs`: `node render.mjs posts\<file>.html [...]` writes a 1080x1350 PNG and a JPG next to each HTML. Prints `ok` or `PROBLEM` per file. Needs `npm install` once in this folder.

## Look
- Canvas 1080x1350 (Instagram 4:5).
- Three backgrounds: `teal` (brand gradient, white text), `cream` (#F6F3EC, near-black text, teal accent), `ink` (#101318, white text, light-teal accent). Rotate so two posts in a row never share one.
- Add the class `xmas` to Christmas posts (until 10 January): the accent turns amber. Nothing else changes.
- Fonts: Plus Jakarta Sans ExtraBold for headlines and big numbers, Inter for everything else.
- Every post ends with the footer: the "P" logo + "ParkCalm" on the left, "parkcalm.com" on the right.
- One idea per post. Headline of 3 to 9 words. No stock photos, no photos of people, no other companies' logos, no car brands.

## Language and voice
- Spanish (Castilian) by default, talking to the reader as *tú*. Galician is welcome for an occasional post if it is written correctly; never mix languages in one post.
- The voice is a local who knows where the spaces are: calm, friendly, practical. Short plain sentences. Specific over vague: real car park names, real prices, real dates.
- Light humour is fine. No hype (revolucionario, increíble, la mejor app), no exclamation-mark chains, at most one emoji in a caption and none on the image.
- Never smug about Vigo's traffic or the Concello. Neutral on the ZBE itself: inform, don't campaign.

## Caption shape
2 to 4 short lines with blank lines between them, then a line `parkcalm.com · gratis y sin registro`, then exactly three hashtags, always including `#parkcalm` (others from: #vigo #aparcarenvigo #navidadvigo #lucesvigo #zbevigo #vigociudad #galicia). Max 2200 characters (aim for under 400).

## Post types
1. **Explainer (slot a, 2:00 PM)**: one feature, shown with a screenshot from `shots/`. Kicker names the feature, headline says what it does for the driver, one note under the screenshot explains what is on screen. Look at the image first and describe only what it shows. The numbers in a screenshot are from the moment it was taken: never present them as current ("ahora hay 100 plazas").
2. **Tip (slot b, 7:00 PM)**: a useful local parking tip or a reason to use ParkCalm. Text only. Prefer real, checkable tips from the facts below; the app is the sign-off, not the whole post.

Each day gets one of each. If no screenshot angle is left, reuse a screenshot with a new headline (not within 7 days of its last use).

## Seasons and timing
- Christmas lights season, until Sunday 10 January 2027: at least every other tip post is about Christmas parking. On the day before and on each peak day, the tip post should be about that day (arrive before 17:00, park outside the centre, check spaces before leaving).
- After 10 January: rotate everyday topics (ZBE, cheapest car parks, zona azul, free parking areas, bus when driving isn't worth it, weekends, rainy days).

## Facts that may be stated (nothing else)
App
- ParkCalm is a free web app for parking in Vigo: parkcalm.com/app. No sign-up needed. Works in the phone's browser and can be installed like an app. Spanish, Galician and English.
- It shows free spaces in Vigo's city-centre car parks using the Concello de Vigo's open data, refreshed every 15 minutes. The list currently shows 13 car parks (A Laxe, Vialia, Policarpo Sanz, Urzáiz, O Berbés, Náutico Cíes, Praza América and others).
- You type where you are going and it recommends the best place to park nearby, with free spaces, walking time and how reliable the data is. It only recommends car parks whose data is fresh.
- The map shows likely street parking and the ZBE outline. Bus mode shows Vitrasa stops.
- ZBE check: pick your DGT label (0, ECO, C, B or none) and it tells you if your destination is inside the ZBE and steers recommendations to places you may use. Vigo's ZBE zones: Centro, Praza de Portugal, Bouzas, Calvario. Cars without a label currently only get an informative letter; fines start on 10 September 2027.
- ParkCalm Pro: €2,99 a month or €24,99 a year, 7 days free for new subscribers. Adds predictive alerts before you leave, the ZBE plan (park outside and get in on foot or by bus), a warning when you approach the ZBE if your car can't enter, longer history, smarter rerouting and no ads. Mention Pro at most once a week, never in a Christmas tip.
- Built by a driver who lives in Vigo and got tired of circling for parking. Independent, not affiliated with the Concello.

Vigo parking (from parkcalm.com/navidad-vigo, prices as of November 2026)
- Price for one hour: A Laxe 1,25 € (first 30 minutes free on the first entry of the day), Praza de Portugal 1,80 €, El Dorado 1,80 €, Praza do Rei 1,83 €, Vialia underground 1,90 €, Príncipe 2,00 €, Parking Vigo (Areal) 2,10 €, Policarpo Sanz 2,56 €, O Berbés 2,70 €, Urzáiz 2,71 €. Always add "precio orientativo" or the month.
- Vialia's outdoor car park is for season-ticket holders and residents this Christmas; the underground one (about 1,200 spaces) stays open.
- Free: Monte de O Castro (walk down, or use the Vigo Vertical escalators to Porta do Sol); Beiramar, O Berbés and Jacinto Benavente (fill up early, especially weekends); Coia, Navia and Samil (further out, then bus).
- Zona azul (ORA): free on Saturdays, Sundays and public holidays. Weekdays paid 9:00 to 14:00 and 16:00 to 20:00: 0,60 € an hour, 1,45 € for two hours (maximum on the same street).

Christmas 2026
- Lights switched on Saturday 14 November; the special traffic plan runs until Sunday 10 January 2027.
- The 12 peak days: 27, 28, 29, 30 November; 1, 5, 6, 7, 8, 26 December; 4, 5 January.
- Traffic restrictions are generally 17:00 to 21:00 and can start earlier or end later with crowds. Baixada á Estación is for buses and taxis. Possible filters into Vialia, Urzáiz and Vía Norte on the busiest days. 20 km/h in the centre's streets.
- Tips: arrive before 17:00 on peak days; check free spaces before leaving and go straight to a car park with room; with family and a full centre, park at O Castro or Samil and continue on foot or by bus.

## Never
- Never claim to be official or endorsed by the Concello de Vigo, the DGT or Vitrasa.
- Never promise a space ("plaza garantizada") or state live numbers as current.
- No reviews, testimonials, user counts, downloads, ratings, "#1" or results. None exist to cite.
- No discounts, giveaways, contests or deadlines that aren't real dates from the facts above.
- No features beyond the facts list or what a screenshot shows.
- No prices other than the ones above; never a price without the month or "orientativo".
- No politics about the ZBE or the Concello. No photos of people. No other brands' logos.
