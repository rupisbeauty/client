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

// this is used on the client by the service category page
export const singleServiceSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    // icon: z.string().nullish(),
    image: imageSchema,
    options: z.array(z.object({ option: z.string() })).nullish(), // filenames
  })
  .nullish();

// used by basic-service-card
export type SingleServiceSchema = z.infer<typeof singleServiceSchema>;

export const relatedServiceSchema = z
  .object({
    service: z.object({
      title: z.string().nullish(),
      description: z.string().nullish(),
      slug: z.string(),
      id: z.string(),
      icon: z.string().nullish(),
      colors: colorsSchema,
      settings: settingsSchema,
      seo: seoSchema,
      image: imageSchema,
      options: z.array(optionSchema).nullish(),
      relatedServices: z.any().nullish(), // @FIXME: needs to be an array of services
    }),
  })
  .nullish();

// baseSchema provides { id, title, description, body, _sys}
export const serviceCategorySchema = baseSchema.merge(
  z.object({
    image: imageSchema,
    options: z.array(optionSchema).nullish(),
    relatedServices: z.array(relatedServiceSchema).nullish(), // @FIXME: needs to be an array of services
    seo: seoSchema,
    settings: settingsSchema,
    colors: colorsSchema,
  })
);
