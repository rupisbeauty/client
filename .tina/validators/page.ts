import { z } from 'zod';
import { baseSchema, seoSchema, settingsSchema, colorsSchema } from './settings';
import { _sysSchema } from './_sys';


export const pageSchema = baseSchema.merge(
  z.object({
    seo: seoSchema,
    settings: settingsSchema,
    colors: colorsSchema,
  })
);
