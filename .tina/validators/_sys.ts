import { z } from 'zod';

export const _sysSchema = z.object({
  filename: z.string(),
  basename: z.string(),
  breadcrumbs: z.array(z.string()),
  relativePath: z.string(),
  extension: z.string(),
});
