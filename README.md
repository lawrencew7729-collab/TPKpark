# TPK Park website

Static multilingual website for TPK Park, deployed by Vercel.

## Structure

- `scripts/site-data.mjs` contains the English, Bahasa Melayu and Chinese content.
- `scripts/build-site.mjs` generates 13 routes for each language (39 HTML pages), including permanent leasing pages for the principal property formats.
- `scripts/validate-site.mjs` checks routes, internal links, metadata, `hreflang`, JSON-LD, images and form labels.
- `src/input.css` contains the shared design system.
- Generated HTML and CSS are produced during the build; the generator, content model and stylesheet source are the maintenance source of truth.

## Local commands

```sh
npm ci
npm test
```

`npm test` regenerates the site, compiles the production CSS and runs the complete validation suite.

## Deployment

Vercel builds with `npm run build` and serves the repository root as a static site. Preview branches must be reviewed before merging into `main`; merging to `main` is the production release action.
