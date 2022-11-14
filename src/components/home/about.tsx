import { Badge, Box, chakra, Container, Stack, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const About = () => {
  return (
    <>
      <VStack my={24}>
        <chakra.h1 color="gray.600" lineHeight="1" mb="-1em">
          About Us
        </chakra.h1>
        <Box w={453 / 2} h={242 / 2} transform="scale(0.6) rotate(23deg)">
          <Image src="/leaves-stem.png" alt="" width="453" height="242" />
        </Box>
      </VStack>
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
        <Box
          w="64"
          h="72"
          position="absolute"
          top="32em"
          right="-8em"
          zIndex={1}
          transform="scale(0.6)"
          display={{ base: 'none', lg: 'block' }}
        >
          <Image
            src="/rose-petals-set1.png"
            alt=""
            width="1200"
            height="1430"
          />
        </Box>
        <Box
          w="64"
          h="72"
          position="absolute"
          bottom="16em"
          left="-8em"
          zIndex={1}
          transform="scale(0.6)"
          display={{ base: 'none', md: 'block' }}
        >
          <Image
            src="/rose-petals-set2.png"
            alt=""
            width="1200"
            height="1430"
          />
        </Box>
        <chakra.h2
          fontSize="6xl"
          color="primary"
          fontFamily="body"
          letterSpacing="wider"
          lineHeight={1.3}
          pt={6}
          textAlign="center"
        >
          Your Neighboorhood Beauty Experts
        </chakra.h2>
        <chakra.p
          fontSize={{ base: 'xl', md: '3xl' }}
          fontWeight="bold"
          borderRadius="lg"
          px={12}
          py={4}
          my={20}
          textAlign="center"
          bg="gray.200"
          shadow="md"
        >
          <chakra.span textDecor="underline" color="green.600">
            Over 15 Years{' '}
          </chakra.span>
          of Esthetic Industry Experience
          <chakra.span display="block">Licensed in NY / NJ</chakra.span>
        </chakra.p>
        <Box textAlign="center">
          <chakra.h2
            fontFamily="body"
            textDecoration="underline"
            my={8}
            color="gray.600"
          >
            State & Local Certifications:
          </chakra.h2>

          <Stack
            direction="row"
            px={24}
            justifyContent="center"
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            gap={{ base: 1, lg: 4 }}
            // maxW={{ base: '70%', lg: '80%' }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'base' }}
            mx="auto"
          >
            <Badge rounded="md" p={2} colorScheme="gray">
              Make-up Artist
            </Badge>
            <Badge rounded="md" p={2} colorScheme="blue">
              Laser
            </Badge>
            <Badge rounded="md" p={2} colorScheme="purple">
              Body Cavitations
            </Badge>
            <Badge rounded="md" p={2} colorScheme="green">
              Hyloran Pen
            </Badge>
            <Badge rounded="md" p={2} colorScheme="yellow">
              Chemical Peeling
            </Badge>
            <Badge rounded="md" p={2} colorScheme="red">
              Micro-Needling
            </Badge>
            <Badge rounded="md" p={2} colorScheme="orange">
              Dermaplaning
            </Badge>
          </Stack>
        </Box>
        <Box
          w={{ base: '100%', lg: '50%' }}
          color="gray.600"
          mt={24}
          textAlign="center"
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
