# Guide: Adding New Blog Posts

With your new Astro architecture, adding blog posts is straightforward and modular. Here is how to create and publish a new essay.

---

### Step 1: Create the Post File
Navigate to `src/pages/posts/` and create a new file with the `.astro` extension. Use the date or a slug for the name.
*Example: `src/pages/posts/my-new-essay.astro`*

### Step 2: Add the Post Boilerplate
Copy and paste this template into your new file. This ensures your post has the correct layout, SEO, and navigation:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout title="Post Title — Tanishq Jain" description="A short summary of your essay for search engines.">
  <main class="pt-32 pb-24">
    <div class="max-w-2xl mx-auto px-6">
      <a href="/blog" class="inline-flex items-center gap-1.5 text-on-surface-variant text-sm font-inter hover:text-primary transition-colors mb-10">
        <span class="material-symbols-outlined text-base">arrow_back</span>
        Back to blog
      </a>
      
      <!-- Meta Info -->
      <div class="mb-6">
        <span class="bg-primary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full font-manrope">Essay</span>
        <span class="text-on-surface-variant text-xs font-inter ml-3">April 8, 2026</span>
      </div>

      <h1 class="font-manrope font-extrabold text-4xl lg:text-5xl tracking-tighter text-on-surface leading-tight mb-10">
        Your Essay Title Here
      </h1>

      <!-- Content -->
      <div class="prose">
        <p>Your content starts here...</p>
        <h2>A Subheading</h2>
        <p>More insightful thoughts from the ecosystem.</p>
      </div>
    </div>
  </main>
</BaseLayout>
```

### Step 3: Link it on the Blog Index
To make the post visible on your [blog list](https://tanishqjain.co/blog), open `src/pages/blog.astro` and find the `<div class="grid ...">` section. Add a new `<article>` card at the top:

```html
<article class="bg-surface-container-low rounded-2xl overflow-hidden fade-in hover:shadow-lg transition-shadow duration-300">
  <div class="p-8">
    <div class="flex items-center gap-3 mb-4">
      <span class="bg-primary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full font-manrope">Essay</span>
      <span class="text-on-surface-variant text-xs font-inter">April 8, 2026</span>
    </div>
    <h2 class="font-manrope font-bold text-xl text-on-surface mb-3 leading-snug">
      Your Essay Title Here
    </h2>
    <p class="text-on-surface-variant text-sm font-inter leading-relaxed mb-6">
      The short summary that appears on the blog list page...
    </p>
    <a href="/posts/my-new-essay" class="inline-flex items-center gap-1.5 text-primary text-sm font-semibold font-inter hover:gap-2.5 transition-all">
      Read more
      <span class="material-symbols-outlined text-base">arrow_forward</span>
    </a>
  </div>
</article>
```

### Step 4: Push to Launch
Just commit and push your changes! Netlify will automatically build the new page and update your sitemap.

---

> [!TIP]
> **Pro Tip: Use Markdown**
> If you'd like to reach the "Scalable Architecture" level, I can help you set up **Astro Content Collections**. This would allow you to simply drop a `.md` file into a folder, and the Blog index will update automatically without you having to edit any HTML!
