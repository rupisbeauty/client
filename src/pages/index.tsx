import { CDN_URL } from '@/utils';
import { Box, chakra, Flex, Grid } from '@chakra-ui/react';
import { ChakraNextImage, PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';
import { LOCATIONS_DIR } from '../utils/constants';

const Home: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Flex display="flex" align="center" justify="center" w="full">
        <Flex
          w="full"
          // maxW={['640px', '768px', '1024px', '1280px', '1536px']}
          minH="100vh"
          p={4}
          direction="column"
          align="center"
          justify="center"
        >
          <Grid
            position="static"
            height="auto"
            width="full"
            minH="auto"
            gridTemplateRows="1fr"
            gridTemplateColumns="100%"
          >
            <Flex position="absolute" inset={0} zIndex="-2">
              <Box w="full" bg="white" />
              <Box w="full" bg="green.200" maxH="80vh" mt={44} opacity={0.3} />
            </Flex>
            <Box
              visibility="inherit"
              w="877px"
              h="638px"
              position="relative"
              margin="61px 0px -86px 0"
              left="100px"
              gridArea="1 /1 / 2 / 2"
              justifySelf="start"
              alignSelf="start"
            >
              <Box
                position="relative"
                borderRadius="rounded"
                boxShadow="sm"
                border="20px solid white"
                overflow="hidden"
                height="100%"
              >
                <ChakraNextImage
                  src={`${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg`}
                  alt="interior of our pearl river location"
                  width="877"
                  height="638"
                  priority
                  objectFit="cover"
                  borderRadius="rounded"
                  overflow="hidden"
                />
              </Box>
              <svg></svg>
            </Box>
            <Box
              w="400px"
              h="32em"
              position="relative"
              margin="151px 0px 10px calc((100% - 980px) * 0.5)"
              left="570px"
              gridArea="1 / 1 / 2 / 2"
              justifySelf="start"
              alignSelf="start"
              boxShadow="sm"
            >
              <Box
                position="absolute"
                inset={0}
                backgroundColor="gray.300"
                borderRadius="rounded"
                border="20px solid white"
              >
                <Box w="100%" h="auto" position="relative" p={8}>
                  <chakra.h2
                    fontSize="7xl"
                    lineHeight="shorter"
                    color="gray.600"
                  >
                    Esthetics is our art.
                  </chakra.h2>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* <Box w="full" minH="90vh" position="relative" zIndex={0}>
            <Box
              position="absolute"
              w="35vmin"
              h="35vmin"
              ml="50%"
              mt={64}
              border="20px solid white"
              bg="gray.300"
              zIndex="3"
              p={3}
            >
              <chakra.h2 fontSize="6xl" lineHeight="shorter" color="gray.600">
                Making a more{' '}
                <chakra.span color="gray.800">beautiful world</chakra.span> .
              </chakra.h2>
            </Box>
            <Box
              position="absolute"
              w="60vmin"
              h="45vmin"
              ml={20}
              mt={56}
              border="20px solid white"
              bg="white"
              zIndex="2"
            />
            <Box
              position="absolute"
              w="40vmax"
              h="55vmax"
              border="20px solid white"
              bg="gray.200"
              // mt={'-45%'}
              right={0}
              top={36}
              zIndex="1"
              mr={24}
            />
          </Box> */}
          {/* <chakra.h1
            m={0}
            fontSize={[null, '4xl', '5xl']}
            fontWeight={800}
            lineHeight={1.5}
          >
            <chakra.span color="rgba(216, 180, 254, 100%)">Rupi</chakra.span>{' '}
            Beauty Studio
          </chakra.h1> */}
          <chakra.h2 fontWeight={600}>Coming Soon!</chakra.h2>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Home;
