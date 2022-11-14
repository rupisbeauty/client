import { About, CoreServices, Hero, Map, ScrollSection } from '@/components';
import { CDN_URL, Debugger, ResDebugger, SERVICES_DIR } from '@/utils';
import {
  Badge,
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';

function ParallaxItem() {
  return (
    <Box zIndex={1} height={500} display="flex" layerStyle="flex-center">
      <Stack
        direction="column"
        justifyContent="center"
        gap={6}
        borderRadius="lg"
        p={8}
        bg="white"
        shadow="md"
        my={6}
      >
        <chakra.h2 color="gray.500" lineHeight="1">
          Come Visit Us At Our Newest Location
        </chakra.h2>
        <VStack m={0} p={0}>
          <chakra.p
            textAlign="center"
            fontSize="4xl"
            lineHeight="1"
            m={0}
            p={0}
          >
            ⭐️⭐️⭐️⭐️⭐️
          </chakra.p>
          <HStack mx="auto" w="full" justifyContent="center">
            <chakra.p color="gray.600">5.0 /</chakra.p>
            <chakra.p color="gray.600">8 Reviews</chakra.p>
          </HStack>
        </VStack>
        <Box
          w="full"
          ml="auto"
          p={2}
          border="1px"
          borderColor="gray.600"
          borderRadius="md"
        >
          <Map width={425} height={175} />
        </Box>
      </Stack>
    </Box>
  );
}

const Slide = () => (
  <Box w="full" h="100vh" bg="green" border="1px solid red" />
);

const Sandbox: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Hero />
      <ScrollSection>
        <ParallaxItem />
      </ScrollSection>
      <About />
      <CoreServices />
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
