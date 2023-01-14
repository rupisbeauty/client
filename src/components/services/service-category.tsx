import {
  Box,
  Center,
  chakra,
  Container,
  Divider,
  Grid,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';

import type { FC } from 'react';
import type { LegacyService } from './types';

import { CDN_URL, PLACEHOLDER_DIR, SERVICES_DIR } from '../../utils/constants';

export const ServiceCategory: FC<{
  service: LegacyService | undefined;
  flip?: boolean;
}> = ({ service, flip }) => (
  <Container
    w="full"
    maxW="container.lg"
    bg="white"
    borderRadius="md"
    mb="10em"
    p={16}
  >
    <Stack direction={{ base: 'column', lg: flip ? 'row' : 'row-reverse' }}>
      <Center w="full" p={2} bg="gray.100" rounded="md">
        <Image
          src={
            service?.image
              ? `${CDN_URL}${SERVICES_DIR}/${service?.image}`
              : `${CDN_URL}${PLACEHOLDER_DIR}/placeholder-rect.jpeg`
          }
          width={600}
          height={405}
          alt=""
        />
      </Center>
      <Box w="full" p={3}>
        <chakra.h2 color="accent">{service?.title}</chakra.h2>
        <chakra.p>{service?.description}</chakra.p>
        <Divider borderColor="gray.200" pt={2} />
        <Grid templateColumns={'auto auto'} p={3}>
          {service?.items.map((serv) => (
            <chakra.p key={serv} w="50%" fontSize="md" fontWeight={600}>
              {serv}
            </chakra.p>
          ))}
        </Grid>
        {service?.packages ? (
          <>
            <Divider borderColor="gray.200" my={2} />
            <Box w="full">
              <chakra.h3 color="accent">Packages</chakra.h3>
              <Stack p={3}>
                {service.packages.map((pckg) => (
                  <chakra.p key={pckg} w="full" fontSize="lg" fontWeight={600}>
                    {pckg}
                  </chakra.p>
                ))}
              </Stack>
            </Box>
          </>
        ) : null}
      </Box>
    </Stack>
  </Container>
);
