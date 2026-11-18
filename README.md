# Christian Woman Craft Collection — US upsell 2

Static website. Local preview: http://127.0.0.1:3152/ . Entry: index.html. Compatible with a static Vercel project; no build command or dependencies required.

Offer: $19.90 USD; operator-provided reference $39.90; Black Friday 50% OFF.

## Before publishing
1. Configure the actual $19.90 offer as the correct second step of your Hotmart sales funnel. Configure acceptance and refusal routing in Hotmart.
2. hotmartEnabled is now true, enabled at the owner’s explicit request after product creation. The SDK is included through app.js using the exact init('salesFunnel').mount('#hotmart-sales-funnel') integration. The supplied salesFunnel SDK mounts the widget on page load.
3. Set the final decline/access destination in offer-config.js. thank-you.html is the local safe fallback and does not block earlier orders.
4. Validate English production print files for this pack. These ten translated marketing images are not the production files.
5. Preserve the intended existing purchase attribution when connecting the funnel. No unrelated pixel or checkout was copied.

All assets are local. assets/en contains 10 PNG masters and 10 optimized WebP previews. PNGs are loaded only when the visitor enlarges an image. Portuguese originals and production reports are outside the public site.

Actual offer selection and routing remain controlled by Hotmart funnel settings and the purchase session. Tests verify layout and SDK initialization with a stub, not an actual charge.
