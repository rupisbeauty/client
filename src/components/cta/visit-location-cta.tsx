import { AspectRatio, Box, chakra, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import type { FC } from 'react';

import { ScrollSection } from '@/components';

export const VisitLocationCTA: FC<{ title: string }> = ({ title }) => (
  <ScrollSection>
    <Box zIndex={1} height={500} display="flex" layerStyle="flex-center">
      <Stack
        direction="column"
        justifyContent="center"
        gap={6}
        borderRadius="lg"
        p={8}
        bg="white"
        shadow="md"
        my={6}
      >
        <chakra.h2
          color="secondary"
          lineHeight="1"
          textAlign="center"
          textShadow=""
        >
          {title}
        </chakra.h2>
        <AspectRatio>
          <Image
            src="/map-image.png"
            alt="address: 2A Franklin Ave, Pearl River, NY 10965"
            width={257}
            height={146}
          />
        </AspectRatio>
      </Stack>
    </Box>
  </ScrollSection>
);
