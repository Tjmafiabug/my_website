import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().default('Essay'),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['events', 'photography']),
    cover: image(),
    photos: z.array(image()),
  }),
});

export const collections = {
  'posts': postsCollection,
  'gallery': galleryCollection,
};
