// @ts-check
import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesnt include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url()
  ),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  // GOOGLE_API_KEY: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
  NEXT_PUBLIC_MIXPANEL_TOKEN: z.string(),
  NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string(),
  NEXT_PUBLIC_TRUSTMARY: z.string(),
  NEXT_PUBLIC_TINA_BRANCH: z.string(),
  NEXT_PUBLIC_TINA_CLIENT_ID: z.string(),
  NEXT_PUBLIC_TINA_READ_ONLY_TOKEN: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
  NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID,
  NEXT_PUBLIC_TRUSTMARY: process.env.NEXT_PUBLIC_TRUSTMARY,
  NEXT_PUBLIC_TINA_BRANCH: process.env.NEXT_PUBLIC_TINA_BRANCH,
  NEXT_PUBLIC_TINA_CLIENT_ID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  NEXT_PUBLIC_TINA_READ_ONLY_TOKEN: process.env.NEXT_PUBLIC_TINA_READ_ONLY_TOKEN,
};
