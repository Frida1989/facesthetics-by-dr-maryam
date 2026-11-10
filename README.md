# Facesthetics by Dr. Maryam

Swedish, responsive one-page clinic website. All booking links go directly to Bokadirekt. No booking form, accounts, tracking, or backend.

## Files and hosting

The complete website is in the repository root. Serve it with any static server. Cloudflare Pages publishes the root of the `main` branch at https://facesthetics-by-dr-maryam.pages.dev/. GitHub Pages also publishes the same branch.

## Content

The portrait, three result photographs and certificate material were supplied by the client. Result photographs are used without retouching. Prices and the visit address are maintained on the linked Bokadirekt page. Cormorant Garamond (regular and true italic) and DM Sans are self-hosted under `assets/fonts/`, with their SIL Open Font Licenses included. Subtle scroll reveals respect reduced-motion preferences. Images and certificates open in a keyboard-accessible dialog.

To update content, edit `index.html`, `styles.css` and `script.js`. Replace assets under `assets/` as needed. Push to `main` to deploy.

All 24 supplied images are included in the expandable image archive, with lightweight thumbnails. Older promotional artwork is labelled as archive material because embedded prices and addresses can be outdated. The current clinic address in the footer is sourced from Bokadirekt. Dentist credentials are stated prominently in the introduction and footer. Basic responsive checks were completed at 320, 390, 768 and 1280 CSS pixels, including keyboard operation of the archive and image dialog. This is a practical accessibility review, not a WCAG certification.
