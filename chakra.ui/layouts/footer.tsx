import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, Text, VStack } from '@chakra-ui/react';
import { Bar, ChakraNextImage } from '../components';
import { ScrollSlide } from '../framer';

export const Footer = () => {
  return (
    <ScrollSlide dir="up" from="bottom">
      <Bar
        as="footer"
        position="sticky"
        bottom={0}
        h="36"
        maxH={'200px'}
        bg="barBg"
        color="brand.900"
        shadow="2xl-dark-"
      >
        <VStack justify="flex-end">
          <Box position="relative" w="80px" h="87px" flex={1}>
            <ChakraNextImage
              width="80"
              height="87"
              objectFit="contain"
              src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
              alt=""
              priority
            />
            <Text fontSize="xl">&copy; {new Date().getFullYear()} </Text>
          </Box>
        </VStack>
      </Bar>
    </ScrollSlide>
  );
};
