import { Container,Stack,VStack } from '@chakra-ui/react';
import React from 'react';

// import type { PagesBlocksHero } from '.tina'; // c3c9 @WIP
import type { FC } from 'react';

import { tinaSchema } from '@/schema';
import { ColumnLeft,ColumnRight,CTABox } from './hero.components';

// export const HeroBlock: FC = (props: PagesBlocksHero) => {
export const HeroBlock: FC = (props: any) => {
  const data = tinaSchema.hero.parse(props);
  const image = tinaSchema.image.parse(props.image);
  return (
    <Container
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
        {data ? (
          <ColumnLeft
            heading={data?.heading}
            subheading={String(data?.subheading)}
          />
        ) : null}
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          {image ? <ColumnRight image={image} /> : null}
          {data ? (
            <CTABox cta={{ title: String(data?.cta), subtitle: data?.phone }} />
          ) : null}
        </VStack>
      </Stack>
    </Container>
  );
};
