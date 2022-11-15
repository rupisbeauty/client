import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  chakra,
  Container,
  Divider,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { MapContainer } from '../map';
import SectionTitle from '../section-title';
import { FullLogo } from './full-logo';
import { StoreIcon } from './store-icon';

export const ContactInfo = () => {
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
        p={16}
        bg="white"
        borderRadius="3xl"
        mb={36}
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
            w="full"
            gap={9}
            justify="flex-start"
            px={24}
            mb={{ base: 24, lg: 0 }}
          >
            <HStack gap={12} w="full" p={0}>
              <Center
                bg="bg"
                w={{ base: 12, md: 24 }}
                h={{ base: 12, md: 24 }}
                rounded="full"
                boxShadow="md"
              >
                <StoreIcon />
              </Center>
              <Box>
                <chakra.p fontSize="2xl" lineHeight={1} fontWeight={600}>
                  2A Franklin Ave
                </chakra.p>
                <chakra.p fontSize="xl" fontWeight={600}>
                  Pearl River, NY 10965
                </chakra.p>
              </Box>
            </HStack>
            <Divider borderColor="gray.300" />
            <HStack gap={12} w="full" p={0}>
              <Center
                bg="bg"
                w={{ base: 12, md: 24 }}
                h={{ base: 12, md: 24 }}
                rounded="full"
                boxShadow="md"
              >
                <PhoneIcon
                  w={{ base: 6, md: 12 }}
                  h={{ base: 6, md: 12 }}
                  color="gray.600"
                />
              </Center>
              <chakra.p fontSize="2xl" fontWeight={600}>
                (862) 571-7873
              </chakra.p>
            </HStack>
          </VStack>
          <Box
            w={{ base: '180px', md: 'full' }}
            alignSelf={{ base: 'flex-start', md: 'center' }}
          >
            <MapContainer />
          </Box>
        </Stack>
      </Container>
    </>
  );
};
