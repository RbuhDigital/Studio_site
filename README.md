# RBH Design Studio — Project Zero

Iteration 0 of the RBH Design Studio public website. The site is a static, responsive Next.js homepage built from `PROJECT_ZERO_RBH.md`.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npx tsc --noEmit
npm test
```

Brand and contact placeholders live in `config/brand.ts`; repeated homepage content lives in `data/home.ts`. The implementation scope and assumptions are recorded in `docs/project-zero-plan.md`.
