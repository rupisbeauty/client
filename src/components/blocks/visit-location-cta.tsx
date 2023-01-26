import { Box, chakra, Stack } from '@chakra-ui/react';

import type { FC } from 'react';

import { MapContainer } from './map';
import { ScrollSection } from './scroll-section';

export const VisitLocationCTA: FC<{ cta: string; address?: string }> = ({
  cta,
  address,
}) => (
  <ScrollSection>
    <Box zIndex={1} height={500} display="flex" layerStyle="flex-center">
      <Stack
        direction="column"
        justifyContent="center"
        gap={6}
        borderRadius="lg"
        p={8}
        bg="white"
        shadow="lg"
        my={6}
      >
        <chakra.h2
          color="gray.500"
          lineHeight="1"
          textAlign="center"
          textShadow="0px 1px 1px #555"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          {cta}
        </chakra.h2>
        <Box alignSelf={'center'}>
          <MapContainer address={address} />
        </Box>
      </Stack>
    </Box>
  </ScrollSection>
);
