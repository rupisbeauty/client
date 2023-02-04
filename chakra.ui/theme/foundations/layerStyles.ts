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
    maxWidth: 'container.xl',
    marginTop: 12,
    marginBottom: 12,
  },
};
