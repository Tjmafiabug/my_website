import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Essay'),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/gallery" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['events', 'photography']),
    cover: image(),
    photos: z.array(image()),
  }),
});

export const collections = { posts, gallery };
