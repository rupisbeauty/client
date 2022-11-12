import { debug as globalDebug, dev } from '@/utils';
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  type ChakraTheme,
} from '@chakra-ui/react';
import { components } from './components';
import { foundations } from './foundations';
import { typography } from './typography';

const debug = globalDebug || false;

export const theme: Partial<ChakraTheme> = extendTheme(
  {
    blur: {},
    components,
    ...foundations,
    ...typography,
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
  withDefaultProps({
    defaultProps: {
      color: 'body',
    },
    // components: ['Heading', 'Text'],
  })
);

dev.log('chakra theme', theme, debug);
