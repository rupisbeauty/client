import { CDN_URL } from '@/utils';
import { Box, chakra, Container, Divider, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { LOCATIONS_DIR } from '../../../utils/constants';
import SectionTitle from '../../section-title';
import { FullLogo } from '../contact';
import { Decorators } from './decorators';
import { LicenseInfo } from './license-info';
import { LicensesStack } from './licenses-stack';

export const About = () => {
  return (
    <>
      <Box my={20}>
        <SectionTitle title="About Us" />
      </Box>
      <Container
        id="about"
        as="section"
        position="relative"
        w="max(20vw, 100%)"
        maxW="container.xl"
        minH="100vh"
        centerContent
        p={16}
        bg="white"
        borderRadius="3xl"
        mb={24}
        overflowX={{ base: 'hidden', lg: 'initial' }}
      >
        <Decorators />
        <FullLogo />
        <Divider borderColor="gray.200" />
        <chakra.h2
          fontSize={{ base: '4xl', xl: '6xl' }}
          color="secondary"
          fontFamily="body"
          letterSpacing="wider"
          lineHeight={1.3}
          pt={6}
          pb={12}
          textAlign="center"
        >
          Your Neighboorhood Beauty Experts
        </chakra.h2>
        <Stack
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
        >
          <Image
            src={`${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg`}
            alt="Pearl River Location Interior"
            width={904 / 2}
            height={1205 / 2}
            style={{ borderRadius: '15px' }}
          />
          <Box w="full" h="full">
            <LicenseInfo />
            <Box
              color="gray.600"
              textAlign={{ base: 'justify', sm: 'center' }}
              p={6}
            >
              <chakra.p fontSize={{ base: 'xl', lg: '2xl' }} mb={9}>
                We are committed to helping you look and feel your best. Our
                licensed estheticians provide best-in class threading, waxing,
                tinting along with thoughtful skin and eyebrow care advice.
              </chakra.p>
            </Box>
          </Box>
        </Stack>
        <Box position="relative" textAlign="center">
          <LicensesStack />
        </Box>
      </Container>
    </>
  );
};
