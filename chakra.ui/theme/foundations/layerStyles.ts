import type { ChakraTheme } from '@chakra-ui/react';

// @NOTE: All default styles are related to .tina blocks
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
  },
};

export const layerStyles: ChakraTheme['layerStyles'] = customLayerStyles;
