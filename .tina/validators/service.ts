import { z } from 'zod';
import { imageSchema } from './image';
import {
  baseSchema,
  colorsSchema,
  seoSchema,
  settingsSchema,
  typenameSchema,
} from './settings';

export const servicecategoriesSchema = z.object({
  option: z.object({
    title: z.string().nullish(),
    description: z.string(),
    slug: z.string(),
    price: z.number(),
    duration: z.number().nullish(),
    image: imageSchema,
    relatedServices: z.any().nullish(), // @FIXME: needs to be an array of services
    id: z.string(),
  }),
});

export const serviceSchema = baseSchema.merge(
  z.object({
    image: imageSchema,
    options: z.array(servicecategoriesSchema),
    relatedServices: z.any().nullish(), // @FIXME: needs to be an array of services
    seo: seoSchema,
    settings: settingsSchema,
    colors: colorsSchema,
  })
);
