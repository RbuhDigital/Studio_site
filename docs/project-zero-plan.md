# Project Zero — Iteration 0 plan

## Existing state

- The repository initially contained only `PROJECT_ZERO_RBH.md`; there was no application, package manifest, styling system, test suite, or reusable component library.
- A minimal Sites-compatible Next.js 16 / React 19 / TypeScript / Tailwind 4 starter now provides the build surface. It uses the App Router and the npm lockfile.
- The starter's optional database surface is not needed by this static homepage and has been removed.

## Iteration 0 implementation approach

- Build one static, server-rendered homepage containing exactly the sections listed in the brief.
- Keep the studio name and configured contact channels in `config/brand.ts`; keep repeated homepage content in `data/home.ts`.
- Use semantic page landmarks, anchor navigation, native `details` elements for the mobile menu and FAQ, visible focus states, comfortable touch targets, and reduced-motion handling.
- Establish the provisional cream/navy/coral/mustard/mint palette, typography scale, spacing, radii, shadows, and width constraints as CSS custom properties.
- Use CSS composition rather than image or animation dependencies for the hero artwork. Motion is limited to small hover transitions and is disabled when reduced motion is requested.
- Connect every contact action to the configured email, phone, or WhatsApp channel.

## Components and files

- `app/layout.tsx`: site metadata, font, icons, and document shell.
- `app/page.tsx`: semantic Iteration 0 homepage and all required sections.
- `app/globals.css`: design tokens, responsive layout, states, and accessibility rules.
- `components/site-header.tsx`: desktop and native mobile navigation.
- `components/service-icon.tsx`: small CSS/icon treatment for the four service categories.
- `config/brand.ts`: editable brand and contact configuration.
- `data/home.ts`: services, audiences, concept projects, process, package concepts, reasons, and FAQs.
- `tests/rendered-html.test.mjs`: server-rendered content and integrity checks.
- `public/favicon.svg`: simple provisional RBH brand mark.

## Dependencies

- No new runtime dependencies. Remove the starter-only `react-loading-skeleton` package after deleting the preview skeleton.
- Use the bundled Next.js/font and CSS only; no animation, component, CMS, database, or form library.

## Risks and assumptions

- The production brand spelling is `RBHU Design Studio` and remains editable in one configuration value.
- Email, phone, WhatsApp, and the privacy notice are configured. Pricing and real client projects remain unavailable; no claim will be fabricated.
- Concept cards are explicitly labelled as concepts and describe illustrative deliverables only.
- The provisional visual system is intentionally reviewable rather than final; palette and illustration polish belong to Iteration 1.
- Contact submission, analytics, and conversion tracking remain out of scope until Iteration 5.

## Validation commands

```bash
npm run lint
npx tsc --noEmit
npm test
```

`npm test` includes the production build and rendered-HTML checks. Manual review targets are 320, 375, 390, 430, tablet, 1280, and 1440 pixel widths; automated browser testing is not added in Iteration 0.

## GitHub Pages deployment

- `npm run build:pages` creates a root-relative static export in `out/` for the custom domain `rbhu.digital`.
- `.github/workflows/deploy-pages.yml` validates, builds, uploads, and deploys that export on every push to `main`; it can also be run manually.
- Local development and the existing Sites-compatible build remain unchanged.
