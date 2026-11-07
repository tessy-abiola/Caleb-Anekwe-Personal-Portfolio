# Caleb Anekwe — Portfolio

Graphic & motion design portfolio built with React 19 + Vite.

## Develop
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Where things live
- `src/data/content.js` — all copy, projects, experience, skills and social links
- `src/sections/` + `src/styles/` — one component and one stylesheet per section
- `src/utils/gmail.js` — builds the encoded Gmail compose URL used by the contact form
- `public/images/work/` — cropped project thumbnails (1280×720 WebP); `public/images/caleb.webp` — portrait

Each project links to its Behance case study. The contact form opens Gmail compose
(`mail.google.com/mail/?view=cm…`) pre-filled for the visitor to review and send; no backend or email service is used.
