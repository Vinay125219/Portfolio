import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    badge: z.string(),
    year: z.coerce.string(),
    impact: z.string(),
    tags: z.array(z.string()),
    domains: z.array(z.enum(['defence', 'desktop', 'dataviz', 'uiux'])),
    tools: z.array(z.enum(['python', 'qt', 'nda'])),
    image: z.string(),
    hero: z.string().optional(),
    nda: z.boolean().default(false),
    problem: z.string(),
    role: z.string(),
    solution: z.string(),
    workflow: z.array(z.object({ step: z.string(), detail: z.string() })),
    features: z.array(z.string()),
    analysis: z
      .array(z.object({ title: z.string(), detail: z.string(), icon: z.string() }))
      .optional(),
    techStack: z.array(z.object({ name: z.string(), role: z.string(), icon: z.string() })),
    value: z.array(z.object({ label: z.string(), sub: z.string(), icon: z.string() })),
    outcome: z.string(),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    order: z.number(),
    bullets: z.array(z.string()),
    related: z.array(z.object({ label: z.string(), href: z.string().optional() })),
  }),
});

export const collections = { projects, experience };
