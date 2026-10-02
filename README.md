# Proapinatural

A responsive bee-products storefront built with plain HTML, CSS and JavaScript. Includes a Spanish/English marketing page, featured collections, a filterable catalog, product dialogs, a device-local favorites bag, brand story, FAQ and WhatsApp contact options.

## Preview

Run `node server.mjs` and open http://localhost:4173.

## Launch checklist

- The catalog uses the supplied product photos in `dist/assets/products/` (29 products, including three pollen sizes and decorative candles).
- Product names, sizes and COP prices follow the named uploads. Prices appear in the catalog, details, local bag and WhatsApp draft, including quantity totals. Hand cream is COP 30,000 and decorative candles COP 5,000, confirmed by the owner.
- Run `node update-catalog.mjs` after updating named uploads to synchronize catalog data and Spanish translations. Decorative candles have no supplied size, so none is invented. The two unnamed WhatsApp uploads are not catalog products.
- Confirm ingredients, usage directions and availability before launch.
- WhatsApp and phone links use +57 324 251 5190 from the supplied promotional flyer.
- Store address: Calle 27 #32 46, Bogotá, Colombia, with a Google Maps search link in the contact section.
- The bag prepares a WhatsApp inquiry with products, quantities and total. Visitors review and send it themselves; the website does not submit orders or take payment.
- Confirm availability, delivery costs and payment arrangements directly before accepting an order.

## GitHub Pages

The included workflow publishes the `dist` directory on pushes to `main`. In the repository Settings → Pages, select GitHub Actions as the source.

Custom domain: `proapinatural.com`, configured through GitHub Pages settings. Cloudflare DNS must point the apex to GitHub Pages and `www` to `acadenap2027.github.io`. Enable HTTPS enforcement after GitHub provisions the certificate. This site deploys through Actions, so a CNAME file is not required.

No secrets or credentials belong in this repository. The website uses Google Fonts with local font fallbacks. Product imagery comes from the supplied `images` folder.
