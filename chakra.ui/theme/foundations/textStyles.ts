import type { ChakraTheme } from '@chakra-ui/react';

export const customTextStyles = {
  h1: {
    fontSize: '5xl',
    fontFamily: 'heading',
    fontWeight: 900,
    lineHeight: 'taller',
  },
  h2: {
    fontSize: '3xl',
    fontFamily: 'heading',
    fontWeight: 800,
    lineHeight: 'tall',
  },
  h3: {
    fontSize: '2xl',
    fontFamily: 'heading',
    fontWeight: 700,
    lineHeight: 'tall',
  },
  h4: {
    fontSize: 'xl',
    fontFamily: 'heading',
    fontWeight: 600,
    lineHeight: 'tall',
  },
  body: {
    fontSize: 'initial',
    fontFamily: 'body',
    fontWeight: 'normal',
    lineHeight: 'base',
  },
  description: {
    fontSize: 'lg',
    fontFamily: 'body',
    fontWeight: 'normal',
    lineHeight: 'base',
  },
  stat: {
    fontSize: 'sm',
    fontFamily: 'body',
    fontWeight: 'normal',
    lineHeight: 'small',
  },
  tiny: {
    fontSize: 'xs',
    fontFamily: 'body',
    fontWeight: 'normal',
    lineHeight: 'smaller',
  },
  title: {
    fontSize: 'xl',
    fontFamily: 'heading',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  card: {
    title: {
      fontSize: 'md',
      fontFamily: 'body',
      color: 'teal.400',
    },
    'title-sm': {
      fontSize: 'xl',
      fontFamily: 'body',
      color: 'teal.400',
    },
  },
  container: {
    default: {
      fontFamily: 'body',
      fontSize: 'base',
      fontWeight: 'normal',
      lineHeight: 'base',
      letterSpacing: 'normal',
      textAlign: 'left',
      textDecoration: 'none',
      textOverflow: 'none',
      textTransform: 'none',
    },
  },
};

export const textStyles: ChakraTheme['textStyles'] = customTextStyles;
