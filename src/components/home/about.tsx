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
          fontSize={{ base: '4xl', xl: '6xl' }}
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
          letterSpacing="wide"
          // bg="gray.200"
          // shadow="md"
          backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='27' ry='27' stroke='%23D3B734' stroke-width='5' stroke-dasharray='13%2c 20%2c 15%2c 21' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 27px;`}
        >
          <chakra.span color="green.600" fontWeight={700}>
            Over 15 Years
          </chakra.span>{' '}
          of Esthetic Industry Experience
          <chakra.span display="block">Licensed in NY / NJ</chakra.span>
        </chakra.p>
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

          <Stack
            direction="row"
            px={24}
            justifyContent="center"
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            gap={{ base: 1, lg: 4 }}
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