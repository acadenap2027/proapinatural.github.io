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
- Store address: Carrera 22 #17-73 sur, Bogotá, Cundinamarca, Colombia, with the owner-supplied Google Maps business listing linked from the address in the contact section.
- The bag prepares a WhatsApp inquiry with products, quantities and total. Visitors review and send it themselves; the website does not submit orders or take payment.
- Confirm availability, delivery costs and payment arrangements directly before accepting an order.

## Cloudflare Pages

Production hosting is Cloudflare Pages, project `proapinatural`, in the owner's Cloudflare account. The site was migrated from GitHub Pages on October 2, 2026.

- Production: https://proapinatural.com/
- Alternate domain: https://www.proapinatural.com/
- Pages hostname: https://proapinatural.pages.dev/
- Both custom domains use proxied CNAME records pointing to `proapinatural.pages.dev`.
- This is a **Direct Upload** project. GitHub pushes save the source but do not update Cloudflare automatically.
- To publish: package the contents of `dist` at the ZIP root with `Compress-Archive -Path 'dist/*' -DestinationPath 'proapinatural-cloudflare.zip' -Force`, then upload it as a production deployment in the Cloudflare Pages project. Do not include the parent `dist` folder or the source uploads.
- Verify the product catalog and HTTPS on both custom domains after deployment.

The existing GitHub Pages workflow is retained as a fallback. GitHub deployments do not change the Cloudflare-hosted production site.

No secrets or credentials belong in this repository. The website uses Google Fonts with local font fallbacks. Product imagery comes from the supplied `images` folder.
