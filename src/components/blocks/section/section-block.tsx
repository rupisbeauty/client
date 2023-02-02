import {
  chakra,
  Container as CUIContainer,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type {
  BoxProps,
  ChakraProps,
  ContainerProps,
  StackProps,
} from '@chakra-ui/react';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { useComponents } from '../../../hooks/use-components';

import { isBrowser } from '@/utils';
const CUITinaMarkdown = chakra(TinaMarkdown);

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

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  body,
  settings: {
    flex,
    spacing,
    decorative,
    typography,
    centerContent,
    contained,
    ...settings
  },
}) => {
  //  n9ZOvMI0UGU @TODO: ADD zod validation
  const [mounted, setMounted] = useState(false);
  const components = useComponents('section');
  useEffect(() => {
    if (!isBrowser) return;
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [setMounted]);

  if (mounted && contained) {
    return (
      <CUIContainer
        as={Stack}
        gap={0}
        centerContent={centerContent}
        layerStyle="container.default"
        {...spacing}
        {...decorative}
        {...typography}
        {...settings}
        {...flex}
      >
        <CUITinaMarkdown
          {...spacing}
          {...typography}
          content={body}
          components={components}
        />
      </CUIContainer>
    );
  }

  return mounted ? (
    <Stack
      gap={0}
      layerStyle="container.default"
      mx={centerContent ? 'auto' : 0}
      {...decorative}
      {...settings}
      {...flex}
    >
      <CUITinaMarkdown
        {...typography}
        {...spacing}
        content={body}
        components={components}
      />
    </Stack>
  ) : null;
};
