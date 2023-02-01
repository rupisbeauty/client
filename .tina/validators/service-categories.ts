import { z } from 'zod';
import { imageSchema } from './image';
import { optionSchema } from './service-options';
import {
  baseSchema,
  colorsSchema,
  seoSchema,
  settingsSchema,
  typenameSchema,
} from './settings';

export const relatedServiceSchema = z
  .object({
    service: z.object({
      title: z.string().nullish(),
      description: z.string().nullish(),
      slug: z.string(),
      id: z.string(),
      colors: colorsSchema,
      settings: settingsSchema,
      seo: seoSchema,
      image: imageSchema,
      options: z.array(optionSchema),
      relatedServices: z.any().nullish(), // @FIXME: needs to be an array of services
    }),
  })
  .nullish();

// baseSchema provides { id, title, description, body, _sys}
export const serviceCategorySchema = baseSchema.merge(
  z.object({
    image: imageSchema,
    options: z.array(optionSchema),
    relatedServices: z.array(relatedServiceSchema), // @FIXME: needs to be an array of services
    seo: seoSchema,
    settings: settingsSchema,
    colors: colorsSchema,
  })
);
