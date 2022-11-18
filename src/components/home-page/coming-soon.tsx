import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, chakra, Flex } from '@chakra-ui/react';
import { ChakraNextImage } from 'chakra.ui';

export const ComingSoon = () => {
  return (
    <Flex
      flexDirection="column"
      justify="center"
      alignItems="center"
      mt={72}
      h="100vh"
    >
      <Box position="relative" flex={1} my="auto">
        <ChakraNextImage
          width="500"
          height="430"
          objectFit="contain"
          src={`${CDN_URL}${BRAND_DIR}/RUPI-NEW-LOGO-PNG-MD.png`}
          alt=""
          priority
        />
      </Box>
      <chakra.p fontSize="4xl">Coming Soon!</chakra.p>
    </Flex>
  );
};
