# Hyderabad Crop Science — React Website

Premium corporate website starter built with React, Vite, React Router, Framer Motion and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Project notes

- The homepage is implemented with responsive sections and subtle scroll reveals.
- Inner-page routes are scaffolded for About, Products, Research, Manufacturing, Quality, Sustainability, Media and Contact.
- The hero uses the generated local image at `public/images/hero-field.png`.
- Supporting editorial images currently use remote Unsplash image URLs; replace these with approved company photography or licensed assets before production.
- The current logo component is a temporary vector approximation of the existing red H / green swoosh brand mark. Replace it with the official transparent logo file to preserve exact brand artwork.
- Product category copy is based on the current public website. Product-specific claims, usage directions, registrations, manufacturing capacity, facility details and certificate validity must be confirmed by the company before publishing.
- The contact details are reproduced from the public website and should be reconfirmed before launch.

## Next implementation steps

1. Supply the original transparent logo file.
2. Provide current product pack shots and approved product names/details.
3. Confirm page copy, company facility information and certification documents.
4. Add the final approved video, image assets, enquiry form backend and analytics.
