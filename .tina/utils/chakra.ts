import { theme } from '@chakra-ui/react';
import { tokens } from '../../chakra.ui/theme/foundations/tokens';

export const mapOptions = (key) => ({
  key: key,
  label: key,
  value: key,
});

const { colors } = theme;
export const mapColors = Object.keys(colors)
  .map((color) =>
    typeof colors[color] === 'string'
      ? { key: color, value: color, label: color }
      : Object.keys(colors[color]).map((shade) => ({
          key: `${color}.${shade}`,
          value: `${color}.${shade}`,
          label: `${color}.${shade}`,
        }))
  )
  .flat();

export const mapSemanticTokens =
  tokens?.colors &&
  Object.entries(tokens?.colors).map(([key, value]) => {
    return {
      key,
      label: key,
      value: typeof value === 'string' ? value : value['default'],
    };
  });
