import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Circle,
  Container,
  Divider,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';

import type { FC } from 'react';

import { FullLogo } from './full-logo';
import { StoreIcon } from './icons';
import { MapContainer } from './map';
import { SectionTitle } from './section/section-title-block';

export const ContactInfo: FC<{
  address: string;
  locality: string;
  phoneNumber: string;
}> = ({
  address = '2A Franklin Ave',
  locality = 'Pearl River, N.Y. 10965',
  phoneNumber = '(862) 571-7873',
}) => {
  return (
    <>
      <Box my={20}>
        <SectionTitle title="Contact Us" />
      </Box>
      <Container
        id="contact"
        as="section"
        position="relative"
        maxW="container.xl"
        centerContent
        p={{ base: 4, md: 16 }}
        bg="white"
        borderRadius="3xl"
        mb={32}
        overflowX="hidden"
      >
        <FullLogo />
        <Stack
          id="stack1"
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          justify="center"
          color="gray.600"
          pt={24}
          borderTop="1px"
          borderColor="gray.300"
        >
          <VStack
            w={{ base: '50%', md: 'full' }}
            minW="400px"
            mx="auto"
            gap={9}
            justify={'flex-start'}
            px={{ base: 6, md: 24, lg: 16, xl: 16 }}
            mb={{ base: 24, lg: 0 }}
          >
            <HStack gap={12} w="full" p={0} flex={1}>
              <Circle
                bg="bg"
                size={{ base: 12, md: 24, lg: 16, xl: 24 }}
                boxShadow="md"
              >
                <StoreIcon
                  // p={2}
                  fill="gray.600"
                  width={{ base: 8, md: 16, lg: 8, xl: 16 }}
                />
              </Circle>
              <Box w="full">
                <chakra.p
                  fontSize={{ base: '2xl', lg: 'xl', xl: '2xl' }}
                  lineHeight={1}
                  fontWeight={600}
                >
                  {address}
                </chakra.p>
                <chakra.p
                  fontSize={{ base: 'xl', lg: 'lg', xl: 'xl' }}
                  fontWeight={600}
                >
                  {locality}
                </chakra.p>
              </Box>
            </HStack>
            <Divider borderColor="gray.300" />
            <HStack gap={12} w="full" p={0}>
              <Circle
                bg="bg"
                size={{ base: 12, md: 24, lg: 16, xl: 24 }}
                boxShadow="md"
              >
                <PhoneIcon
                  p={{ base: 1, md: 3 }}
                  h={{ base: 8, md: 16, lg: 12, xl: 16 }}
                  // h={{ base: 6, md: 12 }}
                  w="full"
                  color="gray.600"
                />
              </Circle>
              <chakra.p
                fontSize={{ base: '2xl', lg: 'xl', xl: '2xl' }}
                fontWeight={600}
              >
                {phoneNumber}
              </chakra.p>
            </HStack>
          </VStack>
          <Box alignSelf={'center'}>
            <MapContainer />
          </Box>
        </Stack>
      </Container>
    </>
  );
};
