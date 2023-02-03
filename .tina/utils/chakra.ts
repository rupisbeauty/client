import { ChakraTheme, theme } from '@chakra-ui/react';
import { customLayerStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { customTextStyles } from '../../chakra.ui/theme/foundations/textStyles';
import { tokens } from '../../chakra.ui/theme/foundations/tokens';
import { shortId } from '../../src/utils/fns';

export const mapOptions = (key: any) => ({
  key: key,
  label: key,
  value: key,
});

const { colors }: { colors: ChakraTheme['colors'] } = theme;
export const mapColors = Object.keys(colors)
  .map((color: string) =>
    typeof colors[color] === 'string'
      ? { key: `${color}-${shortId()}`, value: color, label: color }
      : Object.keys(colors[color] || {}).map((shade) => ({
          key: `${color}.${shade}-${shortId()}}`,
          value: `${color}.${shade}`,
          label: `${color}.${shade}`,
        }))
  )
  .flat();

export const mapSemanticTokens =
  tokens?.colors &&
  Object.entries(tokens?.colors).map(([key, value]) => {
    return {
      key: `${key}-${shortId()}`,
      label: key,
      value: typeof value === 'string' ? value : value['default'],
    };
  });

// Default styles for component block settings.
const defaultStyles: Record<string, any> = {
  ...customLayerStyles.flex.default,
  ...customLayerStyles.container.default,
  ...customLayerStyles.box.default,
  ...customTextStyles.container.default,
};

// known props / share for component block settings.
const styleProps: Record<string, any> = {
  spacing: ['my', 'mx', 'py', 'px'],
  decorative: ['border', 'borderColor', 'rounded', 'shadow'],
  typography: [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'textAlign',
    'textDecoration',
    'textOverflow',
    'textTransform',
  ],
  flex: ['direction', 'justify', 'align', 'wrap', 'gap'],
  box: [
    'width',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
    'backgroundColor',
    'color',
    'display',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'overflow',
    'visibility',
    'opacity',
    'zIndex',
  ],
};

/**
 * Iterates of the expected style props for each setting and
 * compiles an object with the value for each setting
 *
 * @export
 * @return {*}
 */
export function mapSettingsToTinaComponents() {
  let defaults: Record<string, any> = {};
  defaults = Object.keys(styleProps)
    .map((key) => {
      return {
        [key]: {},
      };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  Object.keys(styleProps).forEach((prop) => {
    const propArray = styleProps[prop];
    propArray?.forEach((key: string) => {
      defaults[prop][key] = defaultStyles[key];
    });
  });
  return defaults;
}
