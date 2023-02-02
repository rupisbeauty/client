import type { ChakraTheme } from '@chakra-ui/react';

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
      // @NOTE: this is used a default style by .tina/blocks/section.ts
      width: 'full',
      py: '12',
      px: '6',
      my: '0',
      mx: '0',
      color: 'text',
      bg: 'bg',
      border: '0px',
      borderColor: 'transparent',
      rounded: '0',
      shadow: 'none',
    },
  },
  box: {
    default: {
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
