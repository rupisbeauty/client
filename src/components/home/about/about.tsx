import { Box, chakra, Container } from '@chakra-ui/react';
import SectionTitle from '../../section-title';
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
      >
        <Decorators />
        <chakra.h2
          fontSize={{ base: '4xl', xl: '6xl' }}
          color="secondary"
          fontFamily="body"
          letterSpacing="wider"
          lineHeight={1.3}
          pt={6}
          textAlign="center"
        >
          Your Neighboorhood Beauty Experts
        </chakra.h2>
        <LicenseInfo />
        <Box textAlign="center">
          <chakra.h2
            fontFamily="body"
            textDecoration="underline"
            my={8}
            color="gray.600"
            fontSize={{ base: '2xl', md: '3xl' }}
          >
            State & Local Certifications:
          </chakra.h2>
          <LicensesStack />
        </Box>
        <Box
          w={{ base: '100%', md: '80%', lg: '60%', xl: '50%' }}
          color="gray.600"
          mt={24}
          textAlign={{ base: 'justify', sm: 'center' }}
        >
          <chakra.p fontSize={{ base: 'xl', lg: '2xl' }} mb={9}>
            We are committed to helping you look and feel your best. Our
            licensed estheticians provide best-in class threading, waxing,
            tinting along with thoughtful skin and eyebrow care advice.
          </chakra.p>
        </Box>
      </Container>
    </>
  );
};
