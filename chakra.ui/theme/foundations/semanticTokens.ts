import type { ChakraTheme } from '@chakra-ui/react';
import { darken, lighten } from 'color2k'; // https://color2k.com/

export const semanticTokens: ChakraTheme['semanticTokens'] = {
  colors: {
    bg: {
      default: '#FFF1E4',
      _dark: '#101819',
    },
    primary: '#D3B734',
    secondary: {
      default: '#FAC4C4',
      _dark: '#FF8E8E',
    },
    accent: {
      default: '#F9D1FF',
      _dark: '#DDABE4',
    },
    error: {
      default: '#FF5F5F',
      _dark: '#FD2828',
    },
    warning: {
      default: '#F0DD33',
      _dark: '#F6DF08',
    },
    success: {
      default: '#7AEE9A',
      _dark: '#75E308',
    },
    gray: {
      default: '#B4BFC7',
      _dark: '#707B83',
    },
    link: {
      default: '#7AC4EE',
      _dark: '#1482D1',
    },
    barBg: {
      default: '#FDE4CC',
      _dark: '#2D3738',
    },
    navLink: {
      default: darken('#D3B734', 0.2),
      _dark: lighten('#D3B734', 0.2),
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
