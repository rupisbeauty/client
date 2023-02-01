import { z } from 'zod';
import { imageSchema } from './image';
import { relatedServiceSchema } from './service-categories';

export const optionSchema = z.object({
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
}).nullish();
