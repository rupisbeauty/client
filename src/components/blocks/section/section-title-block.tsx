import { CategoriesBlocksSectionTitle, PagesBlocksSectionTitle } from '.tina';
import { Box, chakra, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import type { FC } from 'react';

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <VStack my={12}>
      <chakra.h1
        color="gray.600"
        lineHeight="1"
        mb="-1em"
        fontSize={{ base: '4xl', sm: '5xl' }}
        textTransform="capitalize"
      >
        {title}
      </chakra.h1>
      <Box
        w={453 / 2}
        h={242 / 2}
        pt={9}
        transform="scale(0.6) rotate(23deg)"
        aria-hidden={true}
      >
        <Image
          src="/leaves-stem.png"
          alt="Image by pikisuperstar on Freepik"
          width="453"
          height="242"
        />
      </Box>
    </VStack>
  );
};

export const SectionTitleBlock: FC<
  PagesBlocksSectionTitle | CategoriesBlocksSectionTitle
> = ({ title }) => {
  return (
    <VStack my={12}>
      <chakra.h1
        color="gray.600"
        lineHeight="1"
        mb="-1em"
        fontSize={{ base: '4xl', sm: '5xl' }}
        textTransform="capitalize"
      >
        {title}
      </chakra.h1>
      <Box
        w={453 / 2}
        h={242 / 2}
        pt={9}
        transform="scale(0.6) rotate(23deg)"
        aria-hidden={true}
      >
        <Image
          src="/leaves-stem.png"
          alt="Image by pikisuperstar on Freepik"
          width="453"
          height="242"
        />
      </Box>
    </VStack>
  );
};
