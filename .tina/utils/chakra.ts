import { theme } from '@chakra-ui/react';
import { customLayerStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { customTextStyles } from '../../chakra.ui/theme/foundations/textStyles';
import { tokens } from '../../chakra.ui/theme/foundations/tokens';
import { shortId } from '../../src/utils/fns';

export const mapOptions = (key) => ({
  key: key,
  label: key,
  value: key,
});

const { colors } = theme;
export const mapColors = Object.keys(colors)
  .map((color) =>
    typeof colors[color] === 'string'
      ? { key: `${color}-${shortId()}`, value: color, label: color }
      : Object.keys(colors[color]).map((shade) => ({
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

const defaultFlex = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
  wrap: 'nowrap',
  gap: '0',
};

const defaultBox = {
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
};

export const sectionStyles = (styleObj) => {
  const {
    px,
    py,
    mx,
    my,
    border,
    borderColor,
    rounded,
    shadow,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    textDecoration,
    textOverflow,
    textTransform,
    ...styles
  } = styleObj;

  return {
    ...styles, // {width, color, bg}
    spacing: { px, py, mx, my },
    decorative: { border, borderColor, rounded, shadow },
    typography: {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      textDecoration,
      textOverflow,
      textTransform,
    },
    flex: defaultFlex,
    box: defaultBox,
  };
};

const defaultStyles = {
  ...customLayerStyles.flex.default,
  ...customLayerStyles.container.default,
  ...customLayerStyles.box.default,
  ...customTextStyles.container.default,
};

const styleProps = {
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

export function mapStylesToTinaComponents() {
  const final = Object.keys(styleProps)
    // const final = {spacing: {}, decorative: {}, typography: {}, flex: {}, box: {}}
    .map((key) => {
      return {
        [key]: {},
      };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  Object.keys(defaultStyles).forEach((prop) => {
    const propArray = styleProps[prop];
    propArray?.length &&
      propArray?.forEach((p) => {
        final[prop][p] = defaultStyles[p];
      });
  });
  return final;
}
