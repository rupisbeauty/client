'use-client';

import { CDN_URL, isDev, PEOPLE_DIR, PLACEHOLDER_DIR } from '@/utils';
import { Box, chakra, Container, Divider, Flex, HStack } from '@chakra-ui/react';
import { ChakraNextImage, CustomIcon } from 'chakra.ui';

export const Hero = () => {
  return (

    <Container w="full" maxW="container.lg" h="100vh">
    <HStack w="full">
      <Box width="full" px={24}>
        <chakra.p fontSize="2xl" letterSpacing={1.1}>
          Let Us Help You...
        </chakra.p>
        <chakra.h2 as="h1" fontSize="7xl" fontWeight={400} lineHeight={1.4}>
          {isDev
            ? `Your Brand's Catch Phrase Goes Here`
            : `Reveal Your Natural Beauty`}
        </chakra.h2>
        <chakra.p mt={7} fontSize="xl" letterSpacing={1.4}>
          Call us today and schedule your visit
        </chakra.p>
        <Divider colorScheme="blue" />
        <HStack w="full" mt={6} justify="flex-end" gap={1}>
          <CustomIcon icon="phone" size="2em" />
          <chakra.p fontSize="3xl" fontWeight={700}>
            (862) 571-7873
          </chakra.p>
        </HStack>
      </Box>
      <Box
        position="relative"
        width="full"
        maxH="400px"
        border="10px solid white"
        overflow="hidden"
      >
        <ChakraNextImage
          src={
            isDev
              ? `${CDN_URL}${PLACEHOLDER_DIR}/placeholder-sq.png`
              : `${CDN_URL}${PEOPLE_DIR}/skin-care-woman-touching-face.jpg`
          }
          alt="beautiful woman touching face after treatment | Image by cookie_studio on Freepik"
          objectFit="cover"
          width="500"
          height="500"
        />
      </Box>
    </HStack>
  </Container>
  );
};

export default Hero;
