import { Container } from '@chakra-ui/react';
import { ChakraNextImage } from 'chakra.ui/components';

import type { FC } from 'react';

import { BRAND_DIR, CDN_URL } from '@/utils';

export const FullLogo: FC = () => {
  return (
    <Container
      position="relative"
      w="full"
      mx="auto"
      centerContent
    >
      <ChakraNextImage
        width="300"
        height="258"
        objectFit="contain"
        src={`${CDN_URL}${BRAND_DIR}/rupi-new-logo-md.png`}
        alt="Rupi Beauty Studio"
        priority
      />
    </Container>
  );
};
