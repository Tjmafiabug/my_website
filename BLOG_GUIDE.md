# ✍️ Content Management Guide 

Welcome to your modern Astro-powered website. This guide will walk you through adding new essays to your portfolio with precision and ease.

---

## 🚀 Quick Launch Checklist

Follow these 4 steps to publish a new post:

### 1. Create the File
Navigate to `src/pages/posts/` and create a new file named with your date or slug.
> **Example:** `src/pages/posts/2026-04-08-new-deal.astro`

### 2. Inject Content Template
Copy and paste the boilerplate below into your new file. This handles the **SEO**, **Layout**, and **Typography** automatically.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout 
  title="Your Essay Title — Tanishq Jain" 
  description="A one-sentence hook for search engines."
>
  <main class="pt-32 pb-24">
    <div class="max-w-2xl mx-auto px-6">
      <a href="/blog" class="inline-flex items-center gap-1.5 text-on-surface-variant text-sm font-inter hover:text-primary transition-colors mb-10">
        <span class="material-symbols-outlined text-base">arrow_back</span>
        Back to blog
      </a>
      
      <!-- Metadata -->
      <div class="mb-6">
        <span class="bg-primary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full font-manrope">Essay</span>
        <span class="text-on-surface-variant text-xs font-inter ml-3">April 8, 2026</span>
      </div>

      <h1 class="font-manrope font-extrabold text-4xl lg:text-5xl tracking-tighter text-on-surface leading-tight mb-10">
        Enter Your Catchy Title Here
      </h1>

      <!-- Main Content -->
      <div class="prose">
        <p>Start your narrative here. Astro handles the spacing and line-height for a premium reading experience.</p>
        
        <h2>Key Lessons</h2>
        <p>Use standard HTML tags for headings and lists.</p>
      </div>
    </div>
  </main>
</BaseLayout>
```

### 3. Update the Blog Feed
To display the link on your [Blog page](https://tanishqjain.co/blog), open `src/pages/blog.astro`. Locate the **Posts Grid** and add a new article card at the top:

```html
<article class="bg-surface-container-low rounded-2xl overflow-hidden fade-in hover:shadow-lg transition-all duration-300">
  <div class="p-8">
    <div class="flex items-center gap-3 mb-4">
      <span class="bg-primary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full font-manrope">Essay</span>
      <span class="text-on-surface-variant text-xs font-inter">April 8, 2026</span>
    </div>
    <h2 class="font-manrope font-bold text-xl text-on-surface mb-3 leading-snug">
      Enter Title Here
    </h2>
    <p class="text-on-surface-variant text-sm font-inter leading-relaxed mb-6">
      A 20-word summary to entice the reader...
    </p>
    <a href="/posts/your-slug-here" class="inline-flex items-center gap-1.5 text-primary text-sm font-semibold font-inter hover:gap-2.5 transition-all">
      Read more
      <span class="material-symbols-outlined text-base">arrow_forward</span>
    </a>
  </div>
</article>
```

### 4. Deploy
Once you are happy with the changes, simply run:
```bash
git add .
git commit -m "feat: add new blog post"
git push origin main
```
Netlify will handle the rest! 🌩️

---

## 💡 Pro Tips for a Premium Look

> [!TIP]
> **Use the `prose` class:**
> All your text content should live inside `<div class="prose">`. This automatically applies the sleek typography and spacing we've configured in `global.css`.

> [!IMPORTANT]
> **Image Optimization:**
> Place any images in `public/assets/images/` and reference them starting with a slash: `<img src="/assets/images/photo.jpg" />`.

---

*Built with ❤️ by your AI Coding Assistant.*
