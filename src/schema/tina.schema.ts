import { z } from 'zod';

const layoutSchema = z.object({
  title: z.string().min(1).max(70),
  description: z.string().min(1).max(160),
  path: z.string().min(1), // @FIXME: remove 4bcb7daf9dd3d160
  slug: z.string().min(1), // @FIXME: remove 4bcb7daf9dd3d160
  backgroundColor: z.string().min(1),
  color: z.string().min(1),
  showCta: z.boolean(),
  showReviews: z.boolean(),
});

const heroSchema = z
  .object({
    __typename: z.string(),
    heading: z.string().min(1),
    subheading: z.string().nullish(),
    image: z.object({
      __typename: z.string(),
      src: z.string().url(),
      alt: z.string().nullish(),
      width: z.number(),
      height: z.number(),
    }),
    cta: z.string().nullish(),
    phone: z.string().min(13),
  })
  .nullable();

const blocksSchema = z.union([heroSchema, z.any()]);

export const pageSchema = layoutSchema.extend({ blocks: blocksSchema });

export const tinaSchema = {
  pages: {
    blocks: blocksSchema,
    hero: heroSchema,
    layout: layoutSchema,
  },
};
