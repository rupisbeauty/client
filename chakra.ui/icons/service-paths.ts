interface SOPI {
  [p: string]: {
    viewBox: string;
    d: string[];
    transform?: string;
  };
}

export const servicePaths: SOPI = {
  facials: {
    viewBox: '4.14 4.15 119.42 119.85',
    d: [
      'M61.3 5.5C48.5 8.3 39.1 15.9 35 26.6c-2.1 5.5-2.2 7.1-1.7 21.9.3 8.8 1 17.2 1.6 18.7L36 70h-8.8c-13.1.1-19.6 3.8-22.3 12.9C4.3 85 4 94.1 4.2 105l.3 18.5h21l.5-9.1c.6-10 2-13.2 7.3-16.4 4.8-2.9 13.6-2.8 16.5.3 2 2.1 2.2 3.4 2.2 14 0 11 .1 11.7 2 11.7s2-.7 2-9.5V105l3.9 2.5c8.9 5.5 19.5 5.7 28.7.5l5.4-3v9.5c0 8.8.1 9.5 2 9.5s2-.7 2-11.7c0-9 .3-12 1.5-13.3 1.4-1.5 1.4-1.8 0-3-1.4-1.1-2.3-.7-6.3 3.2-6.7 6.5-10.5 8.2-18.2 8.3-7.9 0-12.1-1.9-18.7-8.5l-4.7-4.7.3-9.9c.3-12-.5-13.5-7.5-14.3-4.8-.6-4.9-.7-5.2-4.2-.4-4.9 3.1-13.7 7.5-18.9 3.8-4.4 10.3-7.9 21-11.4 5.1-1.7 5.3-1.7 12.7.8 13.9 4.7 19.3 9.7 27.1 24.8 2.5 4.8 5 8.8 5.6 8.8 1.6 0 2.8-4.5 4-16.1 1.6-15.7.9-23.4-3-31.4-3.2-6.4-7.3-10.5-13.9-13.9-8.4-4.3-26.6-5.8-38.9-3.1zM88.1 9c5.7 1.1 15.9 5.6 15.9 7 0 1.2-17.3 8.6-34.4 14.7-8.2 2.9-16.9 6.4-19.2 7.8-4.2 2.5-8.7 7.4-11.8 13-1.6 2.9-1.6 2.6-1.3-9.5.2-10.5.6-13.2 2.4-16.6 4.4-8.3 13-14.3 23.5-16.3 6.1-1.2 18.6-1.3 24.9-.1zm22.6 15.2c2.7 5 2.8 5.9 2.8 18.8-.1 17.8-.6 19.1-4.8 11.7-5.9-10.3-10-14.3-19.7-19l-8.8-4.4 10.1-4.2c5.6-2.3 11.8-5.1 13.7-6.1 1.9-1.1 3.6-1.9 3.7-2 .2 0 1.5 2.4 3 5.2zM38 82.9v8.9L34.6 93c-8.5 2.8-12.5 9.4-12.6 20.2 0 6.1-.2 6.8-2 6.8-1.9 0-2-.7-2-10.4 0-12.5-.8-14.9-6.3-19.8l-4.2-3.6 2-3.8c1.1-2.1 3.5-4.9 5.4-6.1 3-2 4.7-2.3 13.2-2.3H38v8.9zm9.5.1v8.5l-2.7.3-2.8.3V73.9l2.8.3 2.7.3V83zM11.9 95.6c1.8 2.3 2.1 4.1 2.1 13.5V120H8v-13.5c0-7.6.4-13.5.9-13.5s1.9 1.2 3 2.6z',
      'M23.6 79.6c-2.1 2-2.1 7.8 0 9.8 3.5 3.6 8.4.7 8.4-4.9 0-3.7-2.1-6.5-5-6.5-1 0-2.6.7-3.4 1.6zm4.4 4.9c0 1.4-.4 2.5-1 2.5-.5 0-1-1.1-1-2.5s.5-2.5 1-2.5c.6 0 1 1.1 1 2.5zM47.5 64c-1.8 2.9 6.3 6.6 12.7 5.7 2.1-.3 5-1.3 6.5-2.2 2.2-1.5 2.3-1.9 1.1-3.1-1.3-1.3-1.8-1.3-4.4.1-3.7 1.9-7.1 1.9-10.8 0-3.4-1.8-4.3-1.9-5.1-.5zM79.5 64c-1.8 2.9 6.3 6.6 12.7 5.7 2.1-.3 5-1.3 6.5-2.2 2.2-1.5 2.3-1.9 1.1-3.1-1.3-1.3-1.8-1.3-4.4.1-3.7 1.9-7.1 1.9-10.8 0-3.4-1.8-4.3-1.9-5.1-.5zM101.3 70.3c-4.1 2.1-4.6 3.8-1.3 4.9 1 .3.1 1.7-3.3 5-4.5 4.4-6 7.8-3.5 7.8.7 0 3.8-2.7 7-6 3.2-3.2 5.8-5.5 5.8-5 0 .6.9 1 2 1 2.1 0 2.1-1.8-.1-7.8-1-2.7-1.3-2.7-6.6.1zM115.3 78.3c-4.1 2.1-4.6 3.8-1.3 4.9 1 .3.1 1.7-3.3 5-4.5 4.4-6 7.8-3.5 7.8.7 0 3.8-2.7 7-6 3.2-3.2 5.8-5.5 5.8-5 0 .6.9 1 2 1 2.1 0 2.1-1.8-.1-7.8-1-2.7-1.3-2.7-6.6.1zM66.3 93.7c-1 2.6 1.6 3.8 8.7 3.8s9.7-1.2 8.7-3.8c-.4-1.2-1.3-1.3-4.6-.4-3 .8-5.2.8-8.2 0-3.3-.9-4.2-.8-4.6.4z',
    ],
  },
  eyebrows: {
    viewBox: '-0.01 6.21 99.56 87.58',
    d: [
      'M39.1 7.5c-8.3 1.9-20.9 6-29.4 9.8-9 4-11.5 8.6-8.5 15.2C2.5 35.4 6.7 38 9.9 38c1.1 0 8.9-3.5 17.3-7.9 8.4-4.3 18.6-8.9 22.6-10.2 6.5-2.1 7.9-2.2 14.5-1.2 9.1 1.3 17.4 4.6 26.6 10.7 5.4 3.6 7.5 4.6 8.4 3.7 1.4-1.4-3.1-6.3-12.2-13.2C71.3 7.8 56 3.9 39.1 7.5zm24.2 4.6c7.2 2.4 9.7 4.2 4.1 2.8-10.6-2.4-20.4.3-42.3 11.7C10 34.5 7.2 35.1 4.9 30.9 2 25.4 6.3 22.1 23.6 16.1c18.7-6.4 29.4-7.5 39.7-4zM39.3 39.4c-8.8 2.2-16.3 6.5-23.4 13.7-3.7 3.6-7.5 8.1-8.4 9.9-1.7 3.2-1.7 3.3 2.1 8.7 10.9 15.9 30 24.5 47.6 21.5 13.4-2.3 25.3-10.1 33.3-21.6l3.8-5.6-3.8-5.6c-11.8-17.1-32.3-25.6-51.2-21zM62.2 44c7.3 2.2 13.7 6.2 18.8 11.6l3.5 3.6-3-1.5c-1.6-.8-6.8-2.7-11.5-4.3-7.3-2.4-10.1-2.8-20-2.8s-12.7.4-20 2.8c-4.7 1.6-9.8 3.5-11.5 4.3l-3 1.5 3.4-3.6c11.3-11.8 28-16.3 43.3-11.6zM41.5 56.7C38.2 64.4 42.5 72 50 72c7.6 0 11.7-7.5 8.5-15.4-.8-1.8-.5-1.9 3.6-1.2 2.4.4 4.7 1.2 5.1 1.9 1.5 2.3.8 8.3-1.4 12.7-6.7 13.2-24.9 13.2-31.5 0-2.3-4.4-3-10.4-1.5-12.6.8-1.3 3.4-2.1 7.1-2.3 1.8-.1 2.2.3 1.6 1.6zM30.3 71.5C35.7 82 48.4 86.8 58.5 82.1c7.8-3.5 12.4-10.1 13.4-18.8l.6-5.3 8.3 4.1c4.5 2.2 8.2 4.4 8.2 4.9s-3 4.1-6.6 8c-4.5 4.7-8.6 8-12.9 10.1C51.3 94 32.1 90.3 17.6 75 14 71.1 11 67.5 11 67s3.7-2.7 8.3-4.9l8.2-4.1.6 5.3c.3 2.8 1.3 6.6 2.2 8.2z',
    ],
  },
  waxing: {
    viewBox: '4.15 4.15 91.62 91.68',
    d: [
      'M4.5 5c-1.2 1.9.6 3 8.8 5.5 10.4 3.1 12.1 4.4 14.1 10.1.9 2.6 2.8 6.2 4.2 8.2l2.7 3.4-3.2 2.5C29.4 36 28 37.5 28 37.9c0 1.7 8.4 11.1 12.2 13.7 2.1 1.5 6.1 3.5 8.7 4.4 3.7 1.2 5.9 2.9 9.3 7.1 4.1 5.1 17.7 16.8 24.3 21 1.7 1 4.5 1.9 6.3 1.9 1.7 0 3.2.4 3.2.8 0 1.5-2.4 3.2-4.6 3.2-1.3 0-2.6.4-2.9 1-1.1 1.8-4.9 1-9.5-2-5-3.3-6.9-3.6-13.6-1.8-4.2 1.2-4.7 1.1-6-.7-.8-1-1.4-3.8-1.4-6.1 0-5.5-1.7-7.5-16-18.9C25.7 51.6 21.1 46 19.1 38.3c-.7-2.4-2.4-5.2-4.1-6.6-3.5-3-8.7-4.4-10.3-2.8-1.4 1.4-.2 2.5 4.6 4.1 3.9 1.2 4.1 1.6 7.3 10.3 2.2 6.3 7.5 12.1 19.8 21.9C49.2 75.5 50 76.3 50 81.2c0 5.1 2.4 9.6 5.6 10.4 1.4.4 5 .1 7.8-.6 5-1.2 5.5-1.1 9.2 1.4 4.7 3.1 9.7 4.2 12.7 2.9 1.2-.6 3.9-1.7 5.9-2.6 6.9-3 5.7-10.7-1.6-10.7-3 0-4.7-.9-13.2-7.4C71.6 70.9 60 59.8 60 58.8c0-.3 1.2-.8 2.8-1 2.4-.3 2.9-.9 4-5.7 1.8-7.2 1.3-8.1-4.4-8.1-8.9 0-12.3-1.7-21-10.6C36 28 32.8 23.8 32 21.3c-3-9.2-4.7-10.6-18-14.9C5.4 3.7 5.3 3.7 4.5 5zm36.6 34.5c5.2 4.7 11.1 7.5 17 8.2 4.7.6 5 .8 4.7 3.2-.3 2.5-.6 2.6-5.6 2.5-7-.2-15-4.2-20.2-10.2-3.8-4.3-4-4.7-2.4-5.9 2.4-1.7 2.1-1.8 6.5 2.2z',
    ],
  },
};
