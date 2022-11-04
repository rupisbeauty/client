import { HeroGrid } from '@/components/home/hero-grid';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, chakra, Flex } from '@chakra-ui/react';
import { ChakraNextImage, PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Flex
        position="relative"
        w="full"
        // maxW={['640px', '768px', '1024px', '1280px', '1536px']}
        h="60vh"
        p={4}
        direction="column"
        align="center"
        justify="center"
      >
        {/* <Box h="auto" maxH="80vh" w="full">
          <Flex position="absolute" inset={0} zIndex="-2">
            <Box w="full" bg="white" />
            <Box w="full" bg="green.200" maxH="80vh" mt={44} opacity={0.3} />
          </Flex>
        </Box> */}

        <Box position="relative" w="30vw" flex={1} mt="30em">
          <ChakraNextImage
            width="500"
            height="430"
            objectFit="contain"
            src={`${CDN_URL}${BRAND_DIR}/RUPI-NEW-LOGO-PNG.png`}
            alt=""
            priority
          />
        </Box>
        <chakra.p fontSize="4xl">Coming Soon!</chakra.p>
      </Flex>
    </PageLayout>
  );
};

export default Home;
