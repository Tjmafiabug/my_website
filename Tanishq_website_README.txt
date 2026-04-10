Tanishq Jain - Personal Website

A high-performance, modern personal website built with Astro and Tailwind CSS.

TECH STACK:
- Framework: Astro 6.1+
- Styling: Tailwind CSS v4 (Vite Plugin)
- Deployment: Netlify
- SEO: Sitemap integration via @astrojs/sitemap

PROJECT STRUCTURE:
/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # File-based routing
│   └── content/     # Markdown/MDX content (Gallery, Blogs)
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies and scripts

GETTING STARTED:
First, install the dependencies:
npm install

Development:
Start the local development server with Hot Module Replacement (HMR):
npm run dev
The site will be available at http://localhost:4321.

Build:
To generate a static production build:
npm run build
The output will be in the dist/ directory.

Preview:
Preview the production build locally:
npm run preview

DEPLOYMENT:
This project is configured for deployment on Netlify. Any push to the main branch will automatically trigger a build and deploy.

GUIDES:
- Blog Guide (see BLOG_GUIDE.txt) - Instructions for adding and managing blog content.

---
Built with by Tanishq Jain (https://tanishqjain.co)
