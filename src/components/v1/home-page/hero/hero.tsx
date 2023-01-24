import { Container, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

import type { FC } from 'react';

import { Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';

import { Column1, Column2 } from './columns';
import { CTABox } from './cta-box';

import column1 from '__data/site/pages/home/hero.json';

export const Hero: FC = () => {
  return (
    <Container
      id="welcome"
      as="section"
      position="relative"
      w="full"
      maxW="container.xl"
      minH="70vh"
      pb={16}
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

export const Hero2: FC<{
  // data: TinaMarkdownContent | TinaMarkdownContent[];
  data: any;
}> = ({ data }) => {
  return (
    <Container
      id="welcome"
      as="section"
      position="relative"
      w="full"
      maxW="container.xl"
      minH="70vh"
      pb={16}
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
          <ColumnLeft heading={data.heading} subheading={data.subheading} />
        </VStack>
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          <ColumnRight image={data.image} />
          <CTABox />
        </VStack>
      </Stack>
    </Container>
  );
};

export const ColumnLeft: FC<{ heading: string; subheading: string }> = ({
  heading,
  subheading,
}) => {
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
        mb={6}
      >
        {column1.subtitle}
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
          {column1.title}
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

export type ColumnRightProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const ColumnRight = ({ image }: { image: ColumnRightProps }) => {
  return (
    <Box
      maxW={{ lg: '1100px', xl: '800px' }}
      maxH={{ lg: '1100px', xl: '800px' }}
      p={{ base: 0, sm: 0, md: 0, lg: 0 }}
      mb={{ base: 20, sm: 0 }}
    >
      <Image
        // src={`${CDN_URL}${PEOPLE_DIR}/hero-composite.png`}
        // alt="beautiful woman touching face after treatment | Image by cookie_studio on Freepik"
        // width="1200"
        // height="1200"
        {...image}
        priority
      />
    </Box>
  );
};
