import { Box,chakra,Stack } from '@chakra-ui/react';

import type { CategoriesBlocksLocationCta } from '.tina';
import type { FC } from 'react';

import { ScrollSection } from '../section';
import { MapContainer } from '../_shared.components';

// export const LocationCTABlock: FC<
//   PagesBlocksLocationCta | CategoriesBlocksLocationCta
// > = (props) => {
export const LocationCTABlock: FC<any> = (props) => {
  // c3c9 @WIP
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
            data-tinafield="cta"
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
