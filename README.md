# NICEVUC & Njua Academy

Six-page Next.js App Router website built with TypeScript, Tailwind CSS v4, shadcn/ui-style owned components using Radix primitives, and Motion. Authentic photography is sourced from the original nicevec.com website.

## Development

Requires Node 20.9 or later.

```sh
npm install
npm run dev
```

## Verification and deployment

```sh
npm run typecheck
npm run build
```

The site exports to `out/` and can be hosted on a static host. Routes use trailing slashes. `next start` is not used for static exports; serve `out/` or use the hosting provider. No backend secrets are required.

## Editing

- Shared contact details, navigation, admissions documents and FAQs: `src/lib/content.ts`
- Pages: `src/app/`
- Reusable UI and layout components: `src/components/`
- Colour, type, responsive layouts and reduced-motion styles: `src/app/globals.css`
- Original photographs: `public/images/`

Forms validate input and prepare a message the visitor explicitly sends with email or WhatsApp. They do not process payments, send automatically, or store visitor data. Monthly support is an enquiry, not a recurring billing subscription.

## Content to confirm before public launch

The supplied PDFs spell the organisation NICEVUC; the existing domain is nicevec.com. This build follows the PDFs. Confirm the 2027/2028 transition and tuition-free launch dates, administration fee eligibility, current admissions availability, first Class 6 results, and contact details. The documents use the same academic year for transition and launch, so the site asks families to confirm arrangements with the office.

The deployment is private by default and robots metadata is noindex. Set the final production domain in `src/app/layout.tsx`, enable indexing when public, and configure domain redirects when replacing the old site. Forms need no backend; add a delivery service only if direct website submission is desired. Typography pairs Fraunces for expressive headings and italic accents with Outfit for body copy, navigation, and controls. Google Fonts are loaded from Google's stylesheet endpoint with local system fallbacks.
