# ✍️ Content Management Guide (Upgraded)

With your new **Astro Content Collections** architecture, publishing an essay is easier than ever. You no longer need to touch any code files—just write and push.

---

## 🚀 The 2-Step Publishing Process

### 1. Create a Markdown File
Navigate to `src/content/posts/` and create a new file ending in `.md`.
> **Recommended naming:** `your-essay-title.md`

### 2. Add Frontmatter & Write
Copy this template into your new `.md` file. Fill out the details at the top, then write your story underneath.

```markdown
---
title: "The Future of Indian SaaS"
description: "A look into how AI is reshaping the enterprise landscape in India."
pubDate: 2026-04-08
category: "Essay"
---

## Your First Heading

Start writing your content here. 

- You can use **bold** text.
- You can use [links](https://tanishqjain.co).
- You can use lists.

### A Sub-heading
Markdown is converted into sleek, beautiful typography automatically.
```

---

## ✅ Why this is better:
- **Automatic Feed:** The blog index page (`/blog`) will automatically detect your new file, sort it by date, and create the card for you.
- **Auto-Formatting:** Your text is automatically styled with the premium typography we configured.
- **Zero Code:** You never have to touch an `.astro` or `.html` file again to publish an essay.

---

## 🌩️ Push to Go Live
Once you save the file, just push to GitHub as usual:
```bash
git add .
git commit -m "feat: publish new essay"
git push origin main
```

---
*Your blog engine is now fully automated.*
