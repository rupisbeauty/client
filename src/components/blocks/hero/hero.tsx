import { Container, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

import type { tinaSchema } from '@/schema';
import type { FC } from 'react';
import type { z } from 'zod';

import { ColumnLeft, ColumnRight } from './columns';
import { CTABox } from './cta-box';

export const Hero: FC<{
  data: z.TypeOf<typeof tinaSchema.pages.blocks>;
}> = ({ data }) => {
  return (
    <Container
      data-tinafield={data.__typename}
      id={data.__typename}
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
        <ColumnLeft heading={data.heading} subheading={data.subheading} />
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          <ColumnRight image={data.image} />
          <CTABox cta={{ title: data.cta, subtitle: data.phone }} />
        </VStack>
      </Stack>
    </Container>
  );
};
