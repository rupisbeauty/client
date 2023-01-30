/* eslint-disable jsx-a11y/alt-text */ // @FIXME: alt text spread
import { Container, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

import type { FC } from 'react';

import { Column1, Column2 } from './columns';
import { CTABox } from './cta-box';

export const Hero: FC = () => {
  return (
    <Container
      id="welcome"
      as="section"
      layerStyle="container.basic"
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
