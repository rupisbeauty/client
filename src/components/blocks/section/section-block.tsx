import { chakra, Container as CUIContainer, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { ContainerProps } from '@chakra-ui/react';
import type { TinaContainerProps } from './types/section-box';

import { useComponents } from '../../../hooks/use-components';

import { isBrowser } from '@/utils';

const CUITinaMarkdown = chakra(TinaMarkdown);

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  body,
  settings: {
    flex,
    spacing,
    decorative,
    typography,
    centerContent,
    contained,
    isResponsive,
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
        maxW={
          isResponsive
            ? ['container.sm', 'container.md', 'container.lg', 'container.xl']
            : ''
        }
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
