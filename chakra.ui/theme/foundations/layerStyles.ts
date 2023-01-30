import type { ChakraTheme } from '@chakra-ui/react';

export const chakraStyles = {
  'flex-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    border: '1px solid red',
  },
  container: {
    basic: {
      width: 'full',
      maxWidth: 'container.xl',
      marginTop: 12,
      marginBottom: 12,
    },
    default: {
      width: 'full',
      py: 12,
      px: [4, 4, 6],
      my: 0,
      mx: 0,
      color: 'text',
      bg: 'bg',
      border: '0px',
      borderColor: 'transparent',
      rounded: 0,
      shadow: 'none',
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

export const layerStyles: ChakraTheme['layerStyles'] = chakraStyles;
