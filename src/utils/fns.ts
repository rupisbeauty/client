import { isClient } from './constants';

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

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

export function isEven(n: number) {
  return n % 2 == 0;
}

export function isOdd(n: number) {
  return Math.abs(n % 2) == 1;
}
