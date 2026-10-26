# Sanjay Nana Kate — Public Information Website (Starter)

A bilingual (मराठी / English) single-page website built with React, Vite and plain CSS.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # serve the production build
```

Requires Node.js 20 or newer.

## Where to edit content

| What | File |
|---|---|
| Name, ward, phone, WhatsApp, email, address, hours, social links, default language | `src/config/siteConfig.js` |
| Development projects | `src/data/projects.js` |
| News and announcements | `src/data/announcements.js` |
| Gallery photos | `src/data/gallery.js` (put image files in `public/images/gallery/`) |
| All interface text in both languages | `src/i18n/translations.js` |
| Photo and logo | `public/images/corporator.jpg`, `public/images/logo.png` |
| Favicon | `public/favicon.svg` |
| Page title, description and social-share tags | `index.html` |

**Placeholders:** any config value written in `[square brackets]` shows on the site with an orange dotted highlight. Replace the value and remove the brackets.

## Must replace before launch

1. `whatsappNumber`: digits only with country code, e.g. `91XXXXXXXXXX`. While it is empty, WhatsApp buttons say "not configured" instead of opening WhatsApp.
2. `phone` and `email`.
3. `wardNumber` and `areaName`, in both languages.
4. `visitingHours`, in both languages.
5. The biography paragraph and the public service priorities (`about.bioPlaceholder` and `about.priorities` in `translations.js`).
6. Every entry in the three `src/data/*.js` files. After that, set `showDemoNotices: false` in the config.
7. `https://www.example.com` in `index.html` (`og:url` and `og:image`), changed to the live domain.
8. `public/favicon.svg`, changed to an approved icon.
9. Get the office to check the Marathi spelling of the name, designation and address.
10. Optionally add the committee name to "Sabhapati", and fill in the social media links.

## Deploy

**Vercel:** import the folder or Git repo, pick the Vite preset, and leave the build command as `npm run build` and the output as `dist`. `vercel.json` already handles page routing.

**Netlify:** import the repo, or drag the `dist` folder onto app.netlify.com/drop. `netlify.toml` and `public/_redirects` handle routing.

Then connect the custom domain and update the URLs in `index.html`.

## How the inquiry form works

There is no backend. The form checks what the visitor typed and shows them the message to review. It then opens WhatsApp with the message already filled in, and nothing is sent until the visitor presses Send in WhatsApp. No data is stored. Only the language choice is saved, in the browser's localStorage.
