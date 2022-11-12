'use-client';

import { CDN_URL, isDev, PEOPLE_DIR, PLACEHOLDER_DIR } from '@/utils';
import {
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  Square,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { CustomIcon } from 'chakra.ui';
import Image from 'next/image';
import React from 'react';

export const Column1 = () => {
  return (
    <>
      <chakra.p
        color="gray.600"
        fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}
        fontWeight={600}
        letterSpacing={1.1}
        textAlign={{ base: 'center', lg: 'left' }}
        textShadow="0px 1px 1px #555"
        textTransform="uppercase"
        w="100%"
      >
        Let Us Help You...
      </chakra.p>
      <chakra.h2
        as="h1"
        color="primary"
        fontSize={['7xl', null, '9xl', '8xl']}
        fontWeight={400}
        lineHeight={1.2}
        textShadow="0px 1px 1px #555"
        textAlign={['center', null, null, 'left']}
      >
        {!isDev
          ? `Your Brand's Catch Phrase Goes Here`
          : `Reveal Your Natural Beauty`}
      </chakra.h2>
    </>
  );
};

export const Column2 = () => {
  return (
    <Box w="100%" h="100%" p={{ base: 0, sm: 12, md: 24, lg: 0 }}>
      <Image
        src={
          !isDev
            ? `${CDN_URL}${PLACEHOLDER_DIR}/placeholder-sq.png`
            : `${CDN_URL}${PEOPLE_DIR}/skin-care-woman-touching-face-in-box.png`
        }
        alt="beautiful woman touching face after treatment | Image by cookie_studio on Freepik"
        width="900"
        height="900"
      />
    </Box>
  );
};

export const CTABox = () => (
  <Box
    position="absolute"
    bottom={{ base: 200, md: 70, lg: 380, xl: 260 }}
    right={{ base: 90, md: 140, xl: 50 }}
    height={24}
    bg="barBg"
    zIndex={2}
    rounded="lg"
    shadow="lg"
    borderColor="gray.600"
    border="1px solid"
  >
    <Flex align="center" h="100%" p={6} gap={1}>
      <CustomIcon
        icon="phone"
        size={[6, 10, 10, 12]}
        textShadow="0px 2px 3px #555"
        color="gray.600"
      />
      <Divider transform="rotate(90deg)" w="5em" borderColor="gray.600" />
      <Stack>
        <chakra.p lineHeight="1" display={{ base: 'none', md: 'block' }}>
          Book your first appointment today!
        </chakra.p>
        <chakra.p
          fontSize={{ base: 'xl', md: '3xl' }}
          fontWeight={600}
          letterSpacing="wider"
          color="gray.600"
          lineHeight="1"
        >
          (862) 571-7873
        </chakra.p>
      </Stack>
    </Flex>
  </Box>
);

export const Hero2 = () => {
  return (
    <Container
      as="section"
      position="relative"
      w="max(20vw, 100%)"
      maxW="container.xl"
      minH="100vh"
      overflowX={['hidden', null, 'initial']}
    >
      {/* <ResDebugger> */}
      <Stack
        w="full"
        h="100%"
        justifyContent={['center', null, null, 'space-between']}
        alignItems="center"
        direction={['column', null, null, 'row']}
        gap={[0, null, null, 16]}
      >
        <VStack
          h="100%"
          pl={{ base: 0, md: 16, lg: 24 }}
          mt={{ base: 9, md: 24 }}
          layerStyle="flex-center"
        >
          <Column1 />
        </VStack>
        <Square
          size={{ base: 'sm', md: 'xl', lg: 'lg' }}
          bg="barBg"
          position="fixed"
          top={['40em', '20em', '50em', '5em']}
          right={['0em', '2em', '19em', '14em']}
          zIndex={-1}
        />

        <VStack
          w="full"
          h="100%"
          mt={{ base: -24, lg: 0 }}
          layerStyle="flex-center"
        >
          <Column2 />
        </VStack>
      </Stack>
      <CTABox />
    </Container>
  );
};
