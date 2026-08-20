import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const months: Record<string, string> = {
  enero: "January", febrero: "February", marzo: "March", abril: "April",
  mayo: "May", junio: "June", julio: "July", agosto: "August",
  septiembre: "September", octubre: "October", noviembre: "November", diciembre: "December"
};

const desarrolloSchema = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  enlace: z.string().nullable().optional(),
  repositorio: z.string().nullable().optional(),
  imagen: z.string().optional(),
  fecha: z.string(),
  industria: z.string(),
  tecnologia_principal: z.string().nullable().optional(),
  url: z.string().optional()
})

export type DesarrolloFrontmatter = z.infer<typeof desarrolloSchema>;

export const collections = {
  desarrollo: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/desarrollo' }),
    schema: desarrolloSchema,
  }),
};
