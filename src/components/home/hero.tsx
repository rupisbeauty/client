import { CDN_URL, Debugger, isDev, PEOPLE_DIR, PLACEHOLDER_DIR } from '@/utils';
import {
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { CustomIcon } from 'chakra.ui';
import Image from 'next/image';
import React from 'react';

export const Column1 = () => {
  return (
    <Box>
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
      <Box position="relative">
        <chakra.h2
          as="h1"
          color="primary"
          fontSize={{ base: '6xl', sm: '7xl', md: '8Fxl', lg: '7xl' }}
          fontWeight={400}
          lineHeight={1.2}
          textShadow="0px 1px 1px #555"
          textAlign={['center', null, null, 'left']}
        >
          {`Reveal Your Natural Beauty`}
        </chakra.h2>
        <Box
          display={{ base: 'none', sm: 'block' }}
          position="absolute"
          width="188"
          height="190"
          mt={{ sm: -24 }}
          ml={{ sm: '65%', md: '70%', lg: 64 }}
          transform={{ base: 'rotate(23deg) scale(35%)' }}
          zIndex={-1}
        >
          <Image
            src="/leaf.png"
            alt="decorative leaf"
            width="188"
            height="190"
          />
        </Box>
      </Box>
    </Box>
  );
};

export const Column2 = () => {
  return (
    <Box
      maxW={{ lg: '1100px', xl: '800px' }}
      maxH={{ lg: '1100px', xl: '800px' }}
      p={{ base: 0, sm: 0, md: 0, lg: 0 }}
      mb={{ base: 20, sm: 0 }}
    >
      <Image
        src={`${CDN_URL}${PEOPLE_DIR}/hero-composite.png`}
        alt="beautiful woman touching face after treatment | Image by cookie_studio on Freepik"
        width="1200"
        height="1200"
        priority
      />
    </Box>
  );
};

export const CTABox = () => (
  <Box
    position="absolute"
    bottom={{ base: 10, md: 24, lg: -4, xl: 12 }}
    height={24}
    bg="barBg"
    rounded="lg"
    shadow="lg"
    borderColor="gray.600"
    border="1px solid"
    zIndex={1}
    _hover={{
      bg: 'bg',
    }}
  >
    <Flex align="center" h="100%" p={{ base: 6, lg: 6 }} gap={1}>
      <VStack layerStyle="flex-center" w='10%'>
      <CustomIcon
        icon="phone"
        size={[6, 10, 10, 10]}
        textShadow="0px 2px 3px #555"
        color="gray.600"
      />
      </VStack>
      <Divider transform="rotate(90deg)" w="3em" borderColor="gray.600" />
      <Box textAlign="center" w="full" flex={1}>
        <chakra.p
          // lineHeight="1.5"
          display={{ base: 'none', sm: 'block', md: 'block' }}
        >
          Book your first appointment today!
        </chakra.p>
        <chakra.p
          fontSize={{ base: '2xl', md: '2xl', xl: '2xl' }}
          fontWeight={600}
          letterSpacing="wider"
          color="gray.600"
          lineHeight="1"
          textAlign="center"
          _hover={{
            cursor: 'pointer',
          }}
        >
          (862) 571-7873
        </chakra.p>
      </Box>
    </Flex>
  </Box>
);

export const Hero = () => {
  return (
    <Container
      as="section"
      position="relative"
      w="full"
      maxW="container.xl"
      minH="70vh"
      py={16}
      px={{ lg: 12 }}
      overflowX={['hidden', null, null, 'initial']}
    >
      <Stack
        position="relative"
        w="full"
        h="100%"
        justifyContent={['center', null, null, 'space-between']}
        alignItems="center"
        direction={['column', null, null, 'row']}
        gap={[20, null, null, 16]}
      >
        <VStack h="100%" layerStyle="flex-center">
          <Column1 />
        </VStack>
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          <Column2 />
          <CTABox />
        </VStack>
      </Stack>
    </Container>
  );
};
