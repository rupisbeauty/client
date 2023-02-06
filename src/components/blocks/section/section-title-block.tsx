import { Box, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import type {
  CategoriesBlocksSectionTitle,
  PagesBlocksSectionTitle,
} from '.tina';
import type { As } from '@chakra-ui/react';
import type { FC } from 'react';

type HeadingAs = {
  as?: As<any>;
};

// @NOTE: Used by other blocks to internalize section title
export const SectionTitle: FC<{ title: string } & HeadingAs> = ({
  title,
  as = 'h1',
}) => {
  return (
    <VStack my={12}>
      <Heading as={as} color="gray.600" mb="-1em" textStyle={as as string}>
        {title}
      </Heading>
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
  | (PagesBlocksSectionTitle & HeadingAs)
  | (CategoriesBlocksSectionTitle & HeadingAs)
> = ({ title, as = 'h1' }) => {
  return (
    <VStack mt={28} mb={9}>
      <Heading
        as={as}
        color="gray.600"
        textStyle={as as string}
        mb="-1em"
        // data-tinafield="title"
      >
        {title}
      </Heading>
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
