import { DASHES_REGEX,isClient,UNDERSCORES_REGEX } from './constants';

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

/* -------------------------------------------------------------------------- */
/*                                 ARRAY UTILS                                */
/* -------------------------------------------------------------------------- */
/**
 * @params {array} array - array of objects to flatten
 * @params {string} key - key to flatten on
 * @returns {array} - of objects
 */
export function flattenArrayOfObjects<T, U>(arr: T[], key = 'label') {
  if (!arr?.length) throw new Error(`cannot flatten ${JSON.stringify(arr)}`);
  const object = arr?.reduce(
    // @ts-expect-error: item[key] - @TODO: implicit any - how to type?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    (obj, item) => Object.assign(obj, { [item[key]]: item.value }),
    {}
  );
  return object as U;
}

/**
 * chunk a flat array into groups based in the provided value for n
 *
 * @export
 * @param {any[]} arr
 * @param {number} n
 * @param {number} [min=1]
 * @return {*}
 */
export function chunkArray(arr: any[], n: number, min = 1) {
  if (arr.length < min) return arr;
  const chunkLength = Math.max(arr.length / n, 1);
  const chunks = [];
  for (let i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length)
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
  }
  return chunks;
}
/**
 *
 *
 * @param {*} arr
 * @return {*}
 */
export function deDupeArrayOfObjects(arr: Record<string, any>[]) {
  return Array.from(new Set(arr.map((el) => JSON.stringify(el)))).map(
    (el: any) => JSON.parse(el)
  );
}

/* -------------------------------------------------------------------------- */
/*                                STRING UTILS                                */
/* -------------------------------------------------------------------------- */
/**
 * truncate a string to a certain length
 *
 * @export
 * @param {string} str
 * @param {number} n
 * @return {*}
 */
export function truncate(str: string, n: number) {
  return str?.length > n ? str.substring(0, n - 1) + '...' : str;
}

/**
 * works well for simple strings. No language support
 *
 * @param {string} str
 * @return {*}
 */
export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function unSlugifyFilename(slug: string) {
  return filename(slug)
    .split('.')[0]
    ?.replace(UNDERSCORES_REGEX, ' + ')
    .replace(DASHES_REGEX, ' ');
}

/**
 *
 *
 * @export
 * @param {string} str
 * @return {*}
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 *
 *
 * @param {string} word
 * @return {*}
 */
export function unplauralize(word: string) {
  if (word.endsWith('ies')) return word.slice(0, -3) + 'y';
  if (word.endsWith('s')) return word.slice(0, -1);
  return word;
}

export function isEven(n: number) {
  return n % 2 == 0;
}

export function isOdd(n: number) {
  return Math.abs(n % 2) == 1;
}

export const shortId = () => Math.random().toString(36).slice(-6);

/* -------------------------------------------------------------------------- */
/*                                    FILE UTILS                                   */
/* -------------------------------------------------------------------------- */
/**
 * @description: regex to return a filename from a filepath works on both / and \ filepaths
 *
 * @param {string} str
 */
export const filename = (str: string) => str.replace(/^.*[\\\/]/, '');

/**
 * @description: returns the extension from a filepath or filename
 *
 * @param {string} str
 */
export const fileExtension = (str: string) => str.split('.').pop();

/* -------------------------------------------------------------------------- */
/*                               RANDOM HELPERS                               */
/* -------------------------------------------------------------------------- */

/**
 *
 *
 * @export
 * @template T
 * @param {(event: React.SyntheticEvent) => Promise<T>} promise
 * @return {*}
 */
export function onPromise<T>(
  // used to wrap react-hook-forms's submit handler
  // https://github.com/react-hook-form/react-hook-form/discussions/8020#discussioncomment-3429261
  promise: (event: React.SyntheticEvent) => Promise<T>
) {
  return (event: React.SyntheticEvent) => {
    if (promise) {
      promise(event).catch((error) => {
        console.error('Unexpected error', error);
      });
    }
  };
}

export const wait = (delay?: number) => {
  // https://appdividend.com/2022/06/10/javascript-wait/#:~:text=JavaScript%20wait%20To%20make%20your%20JavaScript%20code%20wait%2C,need%20to%20use%20the%20await%20keyword%20with%20it.
  return new Promise((r) => setTimeout(r, delay || 1000));
};

export function getUsernameFromEmail(
  email: string | null | undefined
): string | null {
  const splitEmail = email ? email.split('@')[0] : null;
  return splitEmail ?? null;
}

/**
 *
 *
 * @export
 * @return {*}
 */
export function getAnonId() {
  if (!isClient) return undefined;
  return localStorage.getItem('__anon_id');
}

/**
 *
 *
 * @export
 * @return {*}  {boolean}
 */
export function getConsent(): boolean {
  if (!isClient) return false;
  const consent = localStorage.getItem('rbs-consent');
  if (consent !== null) return JSON.parse(consent);
  localStorage.setItem('rbs-consent', 'false');
  return false;
}

/**
 *
 *
 * @export
 * @param {number} num
 * @return {*}  {string}
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/**
 *
 *
 * @param {number} probability
 * @param {{ truthy: any; falsy: any }} { truthy, falsy }
 * @return {*}  {*}
 */
export const randomConditional = (
  probability: number,
  { truthy, falsy }: { truthy: any; falsy: any }
): any => (Math.random() >= probability ? truthy : falsy);
