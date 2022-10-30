import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  type ChakraTheme,
} from '@chakra-ui/react';
import { debug as globalDebug, dev } from '../../src/utils';
import { components } from './components';
import { foundations } from './foundations';
import { styles } from './styles';
import { typography } from './typography';

const debug = globalDebug || false;

export const theme: Partial<ChakraTheme> = extendTheme(
  {
    blur: {},
    styles,
    components,
    ...foundations,
    ...typography,
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
  withDefaultProps({
    defaultProps: {
      color: 'text',
    },
    // components: ['Heading', 'Text'],
  })
);

dev.log('chakra theme', theme, debug);
