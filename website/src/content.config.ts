import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    readingTime: z.string().default('4 мин'),
    featured: z.boolean().default(false),
    lang: z.enum(['ru', 'en']).default('ru'),
    category: z.string().default(''),
    translation: z.string().optional(),
  }),
});

export const collections = { blog };
