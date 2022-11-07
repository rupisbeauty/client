import { NavMenu } from '@/components';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box } from '@chakra-ui/react';
import { Bar, ChakraNextImage } from '../components';
import { ScrollSlide } from '../framer';

export const Header = () => {
  return (
    <Box zIndex="docked">
      <ScrollSlide dir="down" from="top">
        <Bar as="header" top={0} bg="barBg" shadow="md">
          <Box position="relative" w="100px" h="172px" flex={1}>
            <ChakraNextImage
              width="100"
              height="172"
              objectFit="contain"
              src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
              alt=""
              priority
            />
          </Box>
          <NavMenu />
        </Bar>
      </ScrollSlide>
    </Box>
  );
};
