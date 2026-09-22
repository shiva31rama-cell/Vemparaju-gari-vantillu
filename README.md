# Vemparajugari Vantillu — Digital Menu

A mobile-first digital menu for **Vemparajugari Vantillu**, designed as one restaurant brand with two offerings: restaurant food and traditional pickles.

## Customer experience

1. QR scan
2. Short royal brand splash with the approved logo and optional intro clip
3. Simple home screen
4. Restaurant or Pickles
5. Category
6. Menu item
7. Price / serving size / verified details
8. Contact or Location

The interface is intentionally clean, royal and heritage-inspired without reproducing the physical menu board as a UI.

## Implemented product features

- Telugu / English / bilingual language switch
- Language preference persists on the device
- Restaurant and pickle sections under the same brand
- Menu search across English and Telugu names
- Item detail sheet with Escape/backdrop close support
- Responsive mobile and desktop layout
- Graceful fallback when the approved logo or optional intro clip is absent
- PWA manifest and install metadata
- Production service worker with offline app-shell fallback
- Neutral fallback app icon until the approved brand asset is supplied
- Search-engine crawler policy and sitemap
- Main-branch build validation workflow
- Repository-wide two-space formatting rules through `.editorconfig`

## Language

- Telugu
- English
- Telugu + English

## Information safety

The public menu must contain only restaurant-approved information. Do not invent or infer unclear handwritten names, ingredients, prices, pack sizes, availability, phone numbers, addresses, awards, or historical claims.

The current menu data was transcribed from the restaurant-provided menu photographs. Ingredient and allergen fields remain empty until the restaurant supplies the exact information.

## Brand assets

Approved assets can be added under:

```text
public/assets/
├── brand-logo.png
├── brand-intro.mp4        # optional short intro clip
├── hero-brand.png         # optional transparent artwork
├── food/                  # real restaurant photographs
├── pickles/               # real pickle photographs
└── icons/
```

The application gracefully falls back if optional assets are not present.

## Data model

Menu content is kept separately from the React UI in `src/data/menu.js`. This makes future owner/admin management possible without redesigning the customer interface.

Current menu structure:

```text
Vemparajugari Vantillu
├── Restaurant
│   ├── Biryanis
│   ├── Sunday & Wednesday Special
│   └── Sides & Extras
└── Pickles
    ├── Veg Pickles
    └── Non-Veg Pickles
```

The supplied menu photographs provide names and prices. Exact ingredient/allergen information and any future pack-size variations should be added only after owner confirmation.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment notes

This is a Vite single-page application. Deploy the generated `dist/` directory on a static host with SPA fallback enabled so direct navigation continues to resolve to `index.html`.

For production HTTPS hosting, the service worker caches the app shell and same-origin assets after the first successful load, allowing the menu to remain usable during a temporary connection loss.

## Final business-data checklist before public launch

- Official logo asset confirmed
- Intro clip, if desired
- Exact menu names in Telugu and English
- Prices and serving sizes cross-checked against the latest owner-approved board
- Pickle names and pack sizes cross-checked
- Ingredients / allergen information supplied by the restaurant
- Real food and pickle photographs
- Official phone number and ordering workflow
- Exact restaurant address and permanent map link
- Opening hours

Do not publish placeholder values as if they were official restaurant information.
