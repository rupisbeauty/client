// time helpers
export const ONE_SECOND = 1000;
export const ONE_MIN = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MIN;
export const ONE_DAY = 24 * ONE_HOUR;
// config settings
export const PORT = 3000;
export const ACCESS_TOKEN_EXPIRES_IN = 15;
export const REFRESH_TOKEN_EXPIRES_IN = 60;
export const REDIS_CACHE_EXPIRES_INT = 60;
// export const MAX_BATCH_SIZE = 10;

export const DEFAULT_STALE_TIME: number = 5 * ONE_SECOND; // 5secs

export const isBrowser = typeof window !== 'undefined';
export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';
export const isClient = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const debug = isDev && false;

export const NEXT_AUTH_SESSION_TOKEN_KEY = 'next-auth.session-token';

// image cdn link components -- still used by:
// - components/blocks/about/license-info.tsx
// - components/blocks/about/license-stack.tsx
export const CDN_URL = 'https://cdn.jsdelivr.net/gh/rupistudio/assets@main';
export const LOCATIONS_DIR = '/images/locations';
export const BRAND_DIR = '/brand';
export const PEOPLE_DIR = '/images/people';
export const PLACEHOLDER_DIR = '/images/placeholder';
export const SERVICES_DIR = '/images/services';

/* -------------------------------------------------------------------------- */
/*                                    REGEX                                   */
/* -------------------------------------------------------------------------- */

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PHONE_REGEX = /^\d{3}-\d{3}-\d{4}$/;
export const ZIP_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;
export const URL_REGEX =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const SPECIAL_CHAR_REGEX = /[^a-zA-Z ]/g;
export const DASHES_REGEX = /-/g;
export const UNDERSCORES_REGEX = /_/g;
