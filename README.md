# Track My Cents

A Next.js 16 App Router project for the Track My Cents brand direction.

## Structure

- `src/app` contains the App Router entry points.
- `src/components` contains reusable React components.
- `src/assets` contains the logo, icon, and gray-master asset metadata.

## Commands

```bash
npm run dev
npm run build
npm run lint
```

## Styling

Tailwind CSS 4 is configured through `@tailwindcss/postcss`. Styled Components is enabled through the Next compiler and the App Router registry in `src/components/StyledComponentsRegistry.tsx`.

## Dependencies

The exact `gray-master` package name is not published on npm, so the project uses an npm alias:

```json
"gray-master": "npm:gray-matter@^4.0.3"
```
