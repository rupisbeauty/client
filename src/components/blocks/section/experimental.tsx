import { Box, Card, chakra, Stack, VisuallyHidden } from '@chakra-ui/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type {
  BoxProps,
  ChakraProps,
  ContainerProps,
  StackProps,
} from '@chakra-ui/react';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

const CUITinaMarkdown = chakra(TinaMarkdown);

/* -------------------------------------------------------------------------- */
/*                                    BOXES                                   */
/* -------------------------------------------------------------------------- */

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
type DefaultSettings = Pick<
  ContainerProps,
  'centerContent' | 'width' | 'maxW' | 'backgroundColor' | 'color'
> & { contained: boolean; flex: Partial<StackProps> };

type TinaBox = Pick<
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

type TinaContainerProps = {
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: TinaSettings;
};

/* -------------------------------------------------------------------------- */
/*                                     BOX                                    */
/* -------------------------------------------------------------------------- */
type SectionBoxProps = {
  poly: 'box' | 'stack' | 'card' | 'hidden';
  body: TinaContainerProps['body'];
  settings: TinaContainerProps['settings'] & {
    box: TinaBox;
  };
};

const polymorphicMap = {
  box: Box,
  stack: Stack,
  card: Card,
  hidden: VisuallyHidden,
};

export const SectionBox: React.FC<SectionBoxProps> = ({
  poly = 'box',
  body,
  settings,
  ...props // {title}
}) => {
  return (
    <Box
      as={polymorphicMap[poly]}
      {...settings?.box}
      {...settings?.spacing}
      {...settings?.decorative}
      {...settings?.typography}
    >
      <CUITinaMarkdown content={body} />
    </Box>
  );
};
