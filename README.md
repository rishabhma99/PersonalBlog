## Personal Blog – Next.js Starter

This is a minimal Next.js 14 scaffold geared toward a personal site. It ships with the App Router, TypeScript, ESLint, and a simple landing page you can customize as you grow the content.

### Getting started

- `npm install` – install dependencies  
- `npm run dev` – start the dev server on `http://localhost:3000`  
- `npm run build` – create an optimized production build  
- `npm start` – run the production build locally  
- `npm run lint` – check the project with the Next.js ESLint rules

### Project layout

```
├── app/             # App Router routes, layout, and global styles
│   ├── layout.tsx   # Shared document shell and metadata
│   ├── page.tsx     # Landing page with sample sections
│   └── globals.css  # Baseline styling for the experience
├── public/          # Static assets (add favicons, images, etc.)
├── next.config.mjs  # Next.js configuration
├── tsconfig.json    # TypeScript configuration with `@/*` path alias
└── package.json
```

### Next steps

- Replace the placeholder content in `app/page.tsx` with real posts or fetch data from your CMS.
- Bring in a UI system (Tailwind, Chakra, vanilla CSS) and add components under `app/(site)/components`.
- Add dynamic routes (e.g., `app/blog/[slug]/page.tsx`) once you have Markdown or CMS-driven blogs.
- Configure analytics, SEO, or deployment targets (Vercel, Netlify, etc.) as needed.
