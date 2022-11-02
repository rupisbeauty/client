import { theme as base, type ChakraTheme } from '@chakra-ui/react';

export const fonts: ChakraTheme['fonts'] = {
  heading: `Rambla, ${base.fonts.heading}`,
  body: `Rambla, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  default: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
};
