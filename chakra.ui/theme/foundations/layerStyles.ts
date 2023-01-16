import type { ChakraTheme } from '@chakra-ui/react';

export const layerStyles: ChakraTheme['layerStyles'] = {
  'flex-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    border: '1px solid red',
  },
  container: {
    width: 'full',
    maxW: 'container.lg',
    my: 12,
  },
};
