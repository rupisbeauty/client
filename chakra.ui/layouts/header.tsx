
import { NavMenu } from '@/components';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box} from '@chakra-ui/react';
import {  Bar, ChakraNextImage } from '../components';
import { ScrollSlide } from '../framer';

export const Header = () => {
  return (
    <ScrollSlide dir="down" from="top">
      <Bar
        as="header"
        position="sticky"
        top={0}
        bg="barBg"
        justifyContent="space-between"
        shadow="md"
      >
        <Box position="relative" w="80px" h="87px" flex={1}>
          <ChakraNextImage
            width="80"
            height="87"
            objectFit="contain"
            src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
            alt=""
            priority
          />
        </Box>
        <NavMenu />
      </Bar>
    </ScrollSlide>
  );
};
