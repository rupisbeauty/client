import { z } from 'zod';

const typenameSchema = z.string();
export const imageSchema = z
  .object({
    __typename: typenameSchema.nullish(),
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
