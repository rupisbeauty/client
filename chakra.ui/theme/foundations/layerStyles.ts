import type { ChakraTheme } from '@chakra-ui/react';

// U96mLYCh @NOTE: Tina Settings Definitions
export const customLayerStyles = {
  flex: {
    default: {
      direction: 'row',
      justify: 'flex-start',
      align: 'flex-start',
      wrap: 'nowrap',
      gap: '0',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  border: {
    border: '1px solid red',
  },
  container: {
    basic: {
      width: 'full',
      maxWidth: 'container.xl',
      marginTop: '12',
      marginBottom: '12',
    },
    default: {
      py: '12',
      px: '6',
      my: '0',
      mx: '0',
      color: 'text',
      bg: 'bg',
      border: '0px',
      borderColor: 'gray.300',
      rounded: '0',
      shadow: 'none',
    },
  },
  box: {
    default: {
      width: 'full',
      maxW: 'container.xl',
      minW: 'auto', // @TODO: check if this works.
      height: 'auto',
      maxH: 'auto',
      minH: 'auto',
      backgroundColor: 'bg',
      color: 'text',
      display: 'block',
      position: 'static',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      overflow: 'visible',
      visibility: 'visible',
      opacity: '1',
      zIndex: 'auto',
    },
    responsive: {
      w: 'full',
      maxW: ['container.sm', 'container.md', 'container.lg', 'container.xl'],
      mx: 'auto',
    },
  },
  card: {
    default: {
      borderWidth: '1px',
      borderRadius: 'lg',
      w: { sm: '100%', lg: 'auto' },
      h: { sm: 'auto', lg: 'xs' },
      minW: { sm: 'auto', xl: 'xl' },
      bg: 'white',
      boxShadow: '2xl',
      rounded: 'xl',
      mx: 'auto',
    },
    option: {
      borderWidth: '1px',
      borderRadius: 'lg',
      w: { sm: '100%', lg: 'auto' },
      // h: { sm: 'auto', lg: 'xs' },
      // minW: { sm: 'auto', xl: 'xl' },
      maxW: 'container.md',
      minH: 'xs',
      bg: 'white',
      boxShadow: '2xl',
      rounded: 'xl',
      mx: 'auto',
    },
    header: {
      flex: 1,
      overflow: 'hidden',
    },
    body: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      pt: 6,
      px: 2,
      pb: 4,
      h: 'auto',
      gap: 3,
    },
  },
};

export const layerStyles: ChakraTheme['layerStyles'] = customLayerStyles;
