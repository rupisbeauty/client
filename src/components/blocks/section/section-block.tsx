import { chakra, Container as CUIContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { ContainerProps } from '@chakra-ui/react';
import type { TinaContainerProps } from './types/section';

import { useComponents } from '../../../hooks/use-components';

import { isBrowser } from '@/utils';

const CUITinaMarkdown = chakra(TinaMarkdown);

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  body,
  // U96mLYCh @NOTE: Tina Settings Implementation
  settings: { spacing, decorative, typography, ...settings },
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

  if (mounted) {
    return (
      <CUIContainer
        centerContent={true}
        layerStyle="container.default"
        w="full"
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
        {...spacing}
        {...decorative}
        {...typography}
        {...settings}
      >
        <CUITinaMarkdown content={body} components={components} />
      </CUIContainer>
    );
  }
  return null;
};
