import type { ChakraTheme } from '@chakra-ui/react';

export const semanticTokens: ChakraTheme['semanticTokens'] = {
  colors: {
    error: 'red.400',
    body: {
      default: 'brand.900',
      _dark: 'brand.40',
    },
    link: {
      default: 'purple.300',
      _dark: 'purple.600',
    },
    heading: {
      default: 'brand.300',
      _dark: 'brand.500',
    },
    bodyBg: {
      default: '#FFF1E4',
      _dark: '#190C00',
    },
    barBg: {
      default: 'red.50',
      _dark: 'gray.900',
    },
    placeholder: {
      default: 'gray.400',
      _dark: 'whiteAlpha.300'
    },
    rootBorder: {
      default: 'gray.500',
      _dark: 'gray.700'
    }
  },
};
