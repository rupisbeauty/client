import { About, CoreServices, Hero, Map, ScrollSection } from '@/components';
import { CDN_URL, Debugger, ResDebugger, SERVICES_DIR } from '@/utils';
import {
  AspectRatio,
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
        <chakra.h2
          color="secondary"
          lineHeight="1"
          textAlign="center"
          textShadow=""
        >
          Come Visit Us At Our Newest Location
        </chakra.h2>

        <Box
          ml="auto"
          p={2}
          border="1px"
          borderColor="gray.600"
          borderRadius="md"
        >
          <AspectRatio ratio={16 / 9}>
            <Map width={425} height={175} />
          </AspectRatio>
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
