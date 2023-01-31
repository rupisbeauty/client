import { z } from 'zod';

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
    pos: z
      .object({
        objectFit: z.string().nullish(),
        objectPosition: z.string().nullish(),
        scale: z.string().nullish(),
      })
      .nullish(),
  })
  .nullish();

const pageTitleSchemaPart = z.object({
  title: z.string().min(1),
  // title: z.string().min(1).max(70),
  description: z.string().min(1),
  // description: z.string().min(1).max(160),
  slug: z.string().nullish(),
});

const colorSchemaPart = z.object({
  backgroundColor: z.string().optional(),
  color: z.string().optional(),
});

const settingsSchemaPart = z.object({
  showHeader: z.boolean(),
  showFooter: z.boolean(),
  showCta: z.boolean(),
  showReviews: z.boolean(),
});

const seoSchemaPart = z.object({
  // title: z.string().min(1),
  title: z.string().min(1).max(70),
  // description: z.string().min(1),
  description: z.string().min(1).max(160),
  image: imageSchema,
});

const layoutSchema = z.object({
  title: z.string().min(1),
  // title: z.string().min(1).max(70),
  description: z.string().min(1),
  // description: z.string().min(1).max(160),
  slug: z.string().min(1).nullish(),
  colors: colorSchemaPart,
  settings: settingsSchemaPart,
  seo: seoSchemaPart,
});

const layoutWithImageSchema = layoutSchema.merge(
  z.object({ image: imageSchema })
);

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

export const serviceRelationsSchema = z.object({
  options: z.array(z.object({ option: z.string() })).nullish(),
  serviceList: z.array(z.object({ service: z.string() })).nullish(),
});

export const serviceCategoryDataSchema = layoutWithImageSchema.merge(
  serviceRelationsSchema
);

export const tinaSchema = {
  // blocks: blocksSchema,
  hero: heroSchema,
  layout: layoutSchema,
  image: imageSchema,
  about: aboutSchema,
  locationCTA: locationCTASchema,
  contact: contactSchema,
  coreServices: coreServicesSchema,
  service: serviceCategoryDataSchema,
};
