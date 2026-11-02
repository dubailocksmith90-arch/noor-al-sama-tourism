# Noor Al Sama Tourism L.L.C — Website (Next.js)

Branded, colourful, SEO-optimized website for **Noor Al Sama Tourism L.L.C**,
built with **Next.js + HTML + CSS + JavaScript** (Pages Router, static export).

## Business details used (exact, as supplied)

- **Name:** Noor Al Sama Tourism L.L.C
- **Tagline:** Your ultimate gateway to unforgettable journeys and seamless travel experiences in the UAE!
- **Services:** Visit Visa & Family Visa Assistance · Airline Tickets & Tour Packages ·
  Luxury Rent A Car & ATA Service By Air · Desert Safaris, Cruise Tours & City Tours ·
  plus exclusive Abu Dhabi City Tours
- **Office:** Bayat Complex, Office 118, Near Mamzar Center, Hor Al Anz (Alqeyada Metro Station), Dubai, U.A.E.
- **Call / WhatsApp:** +971 58 148 1826
- **Email:** info@nas-travels.com
- **Website:** www.nooralsamatour.com

No prices, testimonials or other details have been invented — only the
details above appear on the site.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build it (creates plain HTML + CSS + JS)

```bash
npm run build
```

This creates an `out/` folder with the complete static site.

## Put it live on nooralsamatour.com

Option A — Vercel (easiest for Next.js):

1. Push this folder to GitHub, or import it directly in Vercel.
2. Deploy the project.
3. In Vercel, go to Settings → Domains and add `nooralsamatour.com`
   (and `www.nooralsamatour.com`).
4. Point the domain's DNS to Vercel as shown there.

Option B — any static host:

1. Run `npm run build`.
2. Upload the contents of the `out/` folder to your hosting account
   (the account that manages nooralsamatour.com).
3. Point the domain to that hosting.

## Files

- `pages/index.js` — the whole homepage (hero, services, gallery, booking steps, FAQ, enquiry form)
- `pages/_app.js` — loads the stylesheet
- `pages/_document.js` — SEO title, description, canonical URL, Open Graph tags, TravelAgency schema
- `styles/globals.css` — all branding, colours and responsive layout
- `next.config.js` — static export (`out/` folder) so the site works on any host

## Changing photos later

The gallery currently uses colourful gradient cards (no external photos, so
nothing can break). To use your own photos later, add them to a
`public/images/` folder and replace the gallery cards in `pages/index.js`
with `<img>` tags pointing at them.
