import type { ChakraTheme } from '@chakra-ui/react';

export const semanticTokens: ChakraTheme['semanticTokens'] = {
  colors: {
    error: 'red.400',
    body: {
      default: 'brand.900',
      _dark: 'brand.40',
    },
    primary: '#D3B734',
    secondary: {
      default: '#739694',
      _dark: '#a4c0b9',
    },
    accent: {
      default: '#739694',
      _dark: '#a4c0b9',
    },
    gray: {
      default: '#B4BFC7',
      _dark: '#707B83',
    },
    bodyBg: {
      default: '#FFF1E4',
      _dark: '#191b1d',
    },
    link: {
      default: 'black',
      _dark: '#FFF1E4',
    },
    heading: {
      default: 'brand.300',
      _dark: 'brand.500',
    },
    barBg: {
      default: 'red.50', // #FFF5F5
      _dark: '#212325',
    },
    placeholder: {
      default: 'gray.400',
      _dark: 'whiteAlpha.300',
    },
    rootBorder: {
      default: 'gray.500',
      _dark: 'gray.700',
    },
  },
};
