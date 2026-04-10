# 🚀 Tanishq Jain - Personal Website

A high-performance, modern personal website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🛠️ Tech Stack

- **Framework:** [Astro 6.1+](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Vite Plugin)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **SEO:** Sitemap integration via `@astrojs/sitemap`

## 📁 Project Structure

```text
/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # File-based routing
│   └── content/     # Markdown/MDX content (Gallery, Blogs)
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies and scripts
```

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

### Development

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

To generate a static production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This project is configured for deployment on **Netlify**. Any push to the `main` branch will automatically trigger a build and deploy.

## 📝 Guides

- [Blog Guide](BLOG_GUIDE.md) - Instructions for adding and managing blog content.

---

Built with ❤️ by [Tanishq Jain](https://tanishqjain.co)
