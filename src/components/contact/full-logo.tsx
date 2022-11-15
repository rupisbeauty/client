import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box } from '@chakra-ui/react';
import { ChakraNextImage } from 'chakra.ui/components';

export const FullLogo = () => {
  return (
    <Box position="relative" maxW="300px" maxH="258px">
      <ChakraNextImage
        width="300"
        height="258"
        objectFit="contain"
        src={`${CDN_URL}${BRAND_DIR}/rupi-new-logo-md.png`}
        alt="Rupi Beauty Studio"
        priority
      />
    </Box>
  );
};
