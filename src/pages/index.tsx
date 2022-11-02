import { Box, chakra, Flex } from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Flex
        display="flex"
        align="center"
        justify="center"
        w="full"
        minH="100vh"
      >
        <Flex
          w="full"
          maxW={['640px', '768px', '1024px', '1280px', '1536px']}
          minH="100vh"
          p={4}
          direction="column"
          align="center"
          justify="center"
        >
          <chakra.h1
            m={0}
            fontSize={[null, '4xl', '5xl']}
            fontWeight={800}
            lineHeight={1.5}
          >
            <Box as="span" color="rgba(216, 180, 254, 100%)">
              Rupi&apos;s
            </Box>{' '}
            Beauty Studio
          </chakra.h1>
          <chakra.h2 fontWeight={600}>Coming Soon!</chakra.h2>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Home;
