# Developer Portfolio

Bilingual developer portfolio built with Next.js, TypeScript, Tailwind CSS, next-intl, next-themes, shadcn-style components and Motion.

## Routes

- `/` renders the English version.
- `/en` renders English.
- `/es` renders Spanish.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Editable Content

Primary editable content lives in:

- `src/config/profile.ts`
- `src/config/professional-content.ts`
- `src/config/projects-content.ts`
- `messages/en.json`
- `messages/es.json`

Current professional and project content includes explicit placeholders. Replace them with real profile, experience and project details before publishing.

## SEO URL

Set the production URL before deployment:

This value is used by metadata, `robots.txt` and `sitemap.xml`.

## Vercel Deployment

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
4. Use the default Next.js build command: `npm run build`.
5. Deploy after replacing placeholder content.

No external email/contact provider is connected yet. The contact button only appears when an email is configured in `src/config/profile.ts`.
