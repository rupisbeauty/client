import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Bar, ChakraNextImage } from '../components';
import { ScrollSlide } from '../framer';

export const Footer = () => {
  return (
    <ScrollSlide dir="up" from="bottom">
      <Bar
        as="footer"
        bottom={0}
        bg="barBg"
        color="brand.900"
        shadow="2xl-dark-"
      >
        <HStack justify="flex-end" w="full">
          <Box position="relative" w="80px" height="87px" flex={1}>
            <ChakraNextImage
              width="80"
              height="87"
              objectFit="contain"
              src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
              alt="Rupi Beauty Studio"
              priority
            />
          </Box>
          <Text fontSize="xl">&copy; {new Date().getFullYear()} </Text>
        </HStack>
      </Bar>
    </ScrollSlide>
  );
};
