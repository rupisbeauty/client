import type {
  BoxProps,
  ChakraProps,
  ContainerProps,
  StackProps,
} from '@chakra-ui/react';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

type Spacing = Pick<ChakraProps, 'px' | 'py' | 'mx' | 'my'>;
type Decorative = Pick<
  ChakraProps,
  'border' | 'borderColor' | 'rounded' | 'shadow'
>;
type Typography = Pick<
  ChakraProps,
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'letterSpacing'
  | 'textAlign'
  | 'textTransform'
  | 'textDecoration'
  | 'textOverflow'
>;
type DefaultSettings = Pick<ContainerProps, 'backgroundColor' | 'color'>;

export type TinaBox = Pick<
  BoxProps,
  | 'display'
  | 'position'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'overflow'
  | 'visibility'
  | 'opacity'
  | 'zIndex'
  | 'rounded'
  | 'shadow'
  | 'border'
>;

type TinaSettings = {
  spacing: Spacing;
  decorative: Decorative;
  typography: Typography;
  box: TinaBox;
} & DefaultSettings;

export type TinaContainerProps = {
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: TinaSettings;
};
export type TinaBoxProps = {
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: TinaSettings & { flex: Partial<StackProps> };
};
