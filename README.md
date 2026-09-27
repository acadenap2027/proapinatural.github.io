# Propinatural

A responsive, accessible bee-products boutique built with plain HTML, CSS and JavaScript. Includes a filterable catalog, product dialogs, a device-local preview bag, brand story, FAQ and contact section.

## Preview

Run `node server.mjs` and open http://localhost:4173.

## Launch checklist

- Replace the illustrative product images with actual product photography.
- Confirm products, descriptions, ingredients, sizes, prices and currency in `dist/app.js`.
- Add official business email, phone, address and hours in `dist/index.html`.
- Connect a real payment/order service and establish shipping, return and privacy policies before taking orders. The current bag saves products only on the visitor's device and never submits an order.

## GitHub Pages

The included workflow publishes the `dist` directory. In the repository Settings → Pages, select GitHub Actions as the source. Enable the workflow only when ready for public publication.

No secrets or credentials belong in this repository. The website uses Google Fonts with local font fallbacks. Product imagery is AI-generated concept photography.
