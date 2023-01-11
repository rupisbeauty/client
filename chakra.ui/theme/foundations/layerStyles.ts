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
  cardBox: {
    borderRadius: '15px',
    boxShadow:
      '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
  },
};
