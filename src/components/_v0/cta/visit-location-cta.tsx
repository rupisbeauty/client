import { Box, chakra, Stack } from '@chakra-ui/react';

import type { FC } from 'react';

import { MapContainer, ScrollSection } from '@/components/_v0';

export const VisitLocationCTA: FC<{ title: string }> = ({ title }) => (
  <ScrollSection>
    <Box zIndex={1} height={500} display="flex" layerStyle="flex.center">
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
          {title}
        </chakra.h2>
        <Box alignSelf={'center'}>
          <MapContainer />
        </Box>
      </Stack>
    </Box>
  </ScrollSection>
);
