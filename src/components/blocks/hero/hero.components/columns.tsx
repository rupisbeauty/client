import { Box, chakra, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import type { tinaSchema } from '@/schema';
import type { FC } from 'react';
import type { z } from 'zod';

export const ColumnLeft: FC<{ heading: string; subheading: string }> = ({
  heading,
  subheading,
}) => {
  return (
    <VStack h="100%" layerStyle="flex.center">
      {subheading ? (
        <chakra.p
          fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}
          fontWeight={600}
          letterSpacing={1.1}
          textAlign={{ base: 'center', lg: 'left' }}
          textShadow="0px 1px 1px #555"
          textTransform="uppercase"
          w="100%"
          mb={6}
        >
          {subheading}
        </chakra.p>
      ) : null}
      <Box position="relative">
        {heading ? (
          <chakra.h2
            as="h1"
            color="primary"
            fontSize={{ base: '6xl', sm: '7xl', md: '8Fxl', lg: '7xl' }}
            fontWeight={400}
            lineHeight={1.2}
            textShadow="0px 1px 1px #555"
            textAlign={['center', null, null, 'left']}
          >
            {heading}
          </chakra.h2>
        ) : null}
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
    </VStack>
  );
};

export const ColumnRight: React.FC<{
  image: z.TypeOf<typeof tinaSchema.image>;
}> = ({ image }) => {
  return (
    <Box
      maxW={{ lg: '1100px', xl: '800px' }}
      maxH={{ lg: '1100px', xl: '800px' }}
      p={{ base: 0, sm: 0, md: 0, lg: 0 }}
      mb={{ base: 20, sm: 0 }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {image && (
        <Image
          src={image.src}
          width={Number(image?.size?.width || 100)}
          height={Number(image?.size?.width || 200)}
          alt={image.alt + ' | ' + image.attr}
          priority
        />
      )}
    </Box>
  );
};
