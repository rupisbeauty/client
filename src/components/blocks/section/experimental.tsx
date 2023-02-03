import { Box, Card, chakra, Stack, VisuallyHidden } from '@chakra-ui/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const CUITinaMarkdown = chakra(TinaMarkdown);

import type { TinaBox, TinaBoxProps } from './types/section';

/* -------------------------------------------------------------------------- */
/*                                     BOX                                    */
/* -------------------------------------------------------------------------- */
type SectionBoxProps = {
  poly: 'box' | 'stack' | 'card' | 'hidden';
  body: TinaBoxProps['body'];
  settings: TinaBoxProps['settings'] & {
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
      {...settings?.flex}
    >
      <CUITinaMarkdown content={body} />
    </Box>
  );
};
