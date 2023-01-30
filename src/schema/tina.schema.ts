import { z } from 'zod';


const sectionTitleSchema = z.object({
  title: z.string(),
});
const imageSchema = z
  .object({
    src: z.string().min(1),
    alt: z.string().nullish(),
    attr: z.string().nullish(),
    size: z
      .object({
        width: z.number().nullish(),
        height: z.number().nullish(),
      })
      .nullish(),
  })
  .nullish();

const layoutSchema = z.object({
  title: z.string().min(1),
  // title: z.string().min(1).max(70),
  description: z.string().min(1),
  // description: z.string().min(1).max(160),
  colors: z.object({
    backgroundColor: z.string().optional(),
    color: z.string().optional(),
  }),
  settings: z.object({
    showHeader: z.boolean(),
    showFooter: z.boolean(),
    showCta: z.boolean(),
    showReviews: z.boolean(),
  }),
  seo: z.object({
    // title: z.string().min(1),
    title: z.string().min(1).max(70),
    // description: z.string().min(1),
    description: z.string().min(1).max(160),
    image: imageSchema,
  }),
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

export const coreServiceCategorySchema = z.object({
  category: z.string().min(1),
  image: imageSchema,
  link: z.string().min(1),
});

export const coreServicesSchema = z.object({
  title: z.string().min(1),
  serviceCategories: z.array(coreServiceCategorySchema).nullish(),
});

export const locationCTASchema = z.object({
  cta: z.string().min(1),
  // address: z.string().min(1),
});

export const contactSchema = z.object({
  address: z.string().min(1),
  locality: z.string().min(1),
  phoneNumbers: z.string().min(1),
});

export const separatorImageSchema = z.object({
  src: z.string().min(1),
});

// const blocksSchema = z.union([heroSchema, sectionTitleSchema, z.any()]);
// export const pageSchema = layoutSchema.extend({ blocks: blocksSchema });

export const tinaSchema = {
  // blocks: blocksSchema,
  hero: heroSchema,
  layout: layoutSchema,
  image: imageSchema,
  about: aboutSchema,
  locationCTA: locationCTASchema,
  contact: contactSchema,
  coreServices: coreServicesSchema,
};
