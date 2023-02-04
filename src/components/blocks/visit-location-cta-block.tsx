import { Box, chakra, Stack } from '@chakra-ui/react';

import type {
  CategoriesBlocksLocationCta,
  PagesBlocksLocationCta,
} from '.tina';
import type { FC } from 'react';

import { ScrollSection } from './section';
import { MapContainer } from './_shared.components';

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const VisitLocationCTA: FC<{ cta: string; address?: string }> = ({
  cta,
  address,
}) => (
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
          {cta}
        </chakra.h2>
        <Box alignSelf={'center'}>
          <MapContainer address={address} />
        </Box>
      </Stack>
    </Box>
  </ScrollSection>
);

export const LocationCTABlock: FC<
  PagesBlocksLocationCta | CategoriesBlocksLocationCta
> = (props) => {
  // @TODO: consider adding address to tina schema
  const address = '2A Franklin Ave, Pearl River, NY 10965';
  return (
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
            {props.cta}
          </chakra.h2>
          <Box alignSelf={'center'}>
            <MapContainer address={address} />
          </Box>
        </Stack>
      </Box>
    </ScrollSection>
  );
};
