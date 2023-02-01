import { z } from 'zod';
import { baseSchema,colorsSchema,seoSchema,settingsSchema } from './settings';
import { _sysSchema } from './_sys';


// baseSchema provides { id, title, description, body, _sys}
export const pageSchema = baseSchema.merge(
  z.object({
    seo: seoSchema,
    settings: settingsSchema,
    colors: colorsSchema,
  })
);
