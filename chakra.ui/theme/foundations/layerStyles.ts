import type { ChakraTheme } from '@chakra-ui/react';

export const layerStyles: ChakraTheme['layerStyles'] = {
  'flex-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    w: 'full',
    px: [4, null, 0],
    ml: 'auto',
    mt: '10vh',
    zIndex: 0,
  },
};
