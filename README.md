# Glow Petals candle storefront

A responsive React storefront replacing the original yoga HTML template. Uses React 19, React Router, Vite, and Lucide icons. Branding and products are provisional until the business provides its real catalog.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` directory on any static hosting provider. Hash-based routes work without server rewrite rules, including deployments under a subdirectory. Only the React application and `public/` assets are included in the production build; the original site is retained under `legacy/` for reference.

## Included

- Homepage, searchable/filterable/sortable catalog, product detail routes, gift collection.
- Cart with quantity controls, removal, catalog-based totals, and browser persistence.
- Wishlist with browser persistence, mobile navigation, search, accessible labels and reduced-motion support.
- Checkout preview, brand story, candle care, FAQs, contact message preparation, store policies and a fallback page.
- Generated candle photography stored locally; no remote image dependencies.

## Before accepting real orders

This is a frontend storefront, not an operational payment or fulfilment system. Checkout explicitly does not accept payments or place orders. The contact form copies a draft and does not send it. No fake order success is shown.

1. Confirm the brand and replace the illustrative catalog in `src/data.js`, including prices, descriptions, sizes, burn times, and actual product images. Generated product photos are visual concepts, not photographs of stock.
2. Connect a commerce backend for inventory, authoritative pricing, taxes, shipping calculations, and order storage. Never trust client-side totals for payment.
3. Integrate the chosen payment provider through a backend, verify signatures/webhooks server-side, and create confirmed orders only after verified payment events. Keep secrets on the backend, never in Vite variables.
4. Add actual business/contact details and approved shipping, returns, and privacy policies. Connect a real support channel.
5. Verify product safety labels, final delivery rates, checkout, refunds, and fulfilment before opening sales.

Cart and wishlist use `localStorage`; no personal checkout information is persisted. Google Fonts is the only external presentation resource. Generated visual assets: `public/images/`.

## Browser checks

```sh
npx playwright test
```

Browser tests use installed Google Chrome. Set up Chrome or change the browser channel in `playwright.config.js` if needed.
