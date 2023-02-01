import { z } from 'zod';
import { imageSchema } from './image';
import { _sysSchema } from './_sys';

export const typenameSchema = z.string();

export const baseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.any(),
  _sys: _sysSchema,
});

export const seoSchema = z.object({
  __typename: typenameSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string().nullish(),
  image: imageSchema,
});
export const settingsSchema = z.object({
  __typename: typenameSchema,
  showHeader: z.boolean(),
  showFooter: z.boolean(),
  showCta: z.boolean(),
  showReviews: z.boolean(),
});
export const colorsSchema = z.object({
  __typename: typenameSchema,
  backgroundColor: z.string(),
  color: z.string(),
});
