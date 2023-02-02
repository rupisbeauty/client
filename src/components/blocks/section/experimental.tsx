import { Box, Card, chakra, Stack, VisuallyHidden } from '@chakra-ui/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const CUITinaMarkdown = chakra(TinaMarkdown);

import type { TinaBox, TinaContainerProps } from './types/section-box';

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
