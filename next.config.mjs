// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'assets.tina.io',
    ],
    // ::dS4OgwSTmS:: these are equiv. to defaults from `chakra.ui/theme/foundations/breakpoints`
    deviceSizes: [400, 768, 992, 1280, 1536],
  },
  // @NOTE: use partytown to enable workers
  // yarn add -D @builder.io/partytown
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  async rewrites() {
    return [
      {
        // write index route to /home -- this is where tina loads
        source: '/',
        destination: '/home',
      },
    ];
  },
};
export default config;
