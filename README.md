# Proapinatural

A responsive bee-products storefront built with plain HTML, CSS and JavaScript. Includes a Spanish/English marketing page, featured collections, a filterable catalog, product dialogs, a device-local favorites bag, brand story, FAQ and WhatsApp contact options.

## Preview

Run `node server.mjs` and open http://localhost:4173.

## Launch checklist

- The catalog uses the supplied product photos in `dist/assets/products/` (27 products; one duplicate photo omitted).
- Each product costs COP 20,000. Prices appear in the catalog, details and local bag, including quantity totals.
- Confirm product descriptions, ingredients, sizes and availability in `dist/app.js` before launch.
- WhatsApp and phone links use +57 324 251 5190 from the supplied promotional flyer.
- Store address: Calle 27 #32 46, Bogotá, Colombia, with a Google Maps search link in the contact section.
- The bag prepares a WhatsApp inquiry with products, quantities and total. Visitors review and send it themselves; the website does not submit orders or take payment.
- Confirm availability, delivery costs and payment arrangements directly before accepting an order.

## GitHub Pages

The included workflow publishes the `dist` directory on pushes to `main`. In the repository Settings → Pages, select GitHub Actions as the source.

No secrets or credentials belong in this repository. The website uses Google Fonts with local font fallbacks. Product imagery comes from the supplied `images` folder.
