import { Box, Container } from '@chakra-ui/react';

import type { CDNImage } from '@/_content';
import { ChImage } from 'chakra.ui';

export const ServicesCoverImage: React.FC<{ cover: CDNImage }> = ({ cover }) => {
  return (
    <Container as="section" layerStyle="container" p={0}>
      <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
        <ChImage
          src={cover.src}
          width={cover.width}
          height={cover.height}
          alt={cover.alt + ' | ' + cover.attr}
          {...cover.styles}
        />
      </Box>
    </Container>
  );
};
