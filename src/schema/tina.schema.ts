import { z } from 'zod';

const layoutSchema = z.object({
  title: z.string().min(1).max(70),
  description: z.string().min(1).max(160),
  backgroundColor: z.string().min(1),
  color: z.string().min(1),
  showHeader: z.boolean(),
  showFooter: z.boolean(),
  showCta: z.boolean(),
  showReviews: z.boolean(),
});

const sectionTitleSchema = z.object({
  title: z.string(),
});
const imageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
});

const heroSchema = z.object({
  heading: z.string().min(1),
  subheading: z.string().nullish(),
  image: imageSchema,
  cta: z.string().nullish(),
  phone: z.string().min(13),
});

// const TinaMD = x.Type
export const aboutSchema = z.object({
  title: z.string().min(1),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  caption: z.string().min(1),
  description: z.string().min(1),
  image: imageSchema,
  showLicenses: z.boolean(),
  body: z.string().min(1),
});

export const locationCTASchema = z.object({
  cta: z.string().min(1),
  // address: z.string().min(1),
});

// const blocksSchema = z.union([heroSchema, sectionTitleSchema, z.any()]);
// export const pageSchema = layoutSchema.extend({ blocks: blocksSchema });

export const tinaSchema = {
  pages: {
    // blocks: blocksSchema,
    hero: heroSchema,
    layout: layoutSchema,
    image: imageSchema,
    about: aboutSchema,
    locationCTA: locationCTASchema,
  },
};
