import { Hero } from '@/components/home';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, chakra, Container } from '@chakra-ui/react';
import { ChakraNextImage, PageLayout, ParallaxItem } from 'chakra.ui';
import { type NextPage } from 'next';
import { Background, Parallax } from 'react-parallax';
import { FramerParallax } from '../../chakra.ui/framer/parallax';
import { isDev, LOCATIONS_DIR } from '../utils/constants';

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  color: 'black',
};

const Home: NextPage = () => {
  return (
    <>
      <PageLayout
        title="Rupi Beauty Studio"
        description="Eyebrows, facials, waxing & more"
      >
        <FramerParallax>
          <Initial />
        </FramerParallax>
        <Parallax
          bgImage={`${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg`}
          strength={-100}
        >
          <chakra.div height={500}>
            <chakra.div sx={insideStyles}>Reverse direction</chakra.div>
          </chakra.div>
        </Parallax>
      </PageLayout>
    </>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Home;

export const Initial = () => {
  return (
    <>
      {isDev ? (
        <>
          <Hero />
        </>
      ) : (
        <ComingSoon />
      )}
    </>
  );
};

export const ComingSoon = () => {
  return (
    <>
      <Box position="relative" w="20vw" flex={1} height="100vh">
        <ChakraNextImage
          width="500"
          height="430"
          objectFit="contain"
          src={`${CDN_URL}${BRAND_DIR}/RUPI-NEW-LOGO-PNG-MD.png`}
          alt=""
          priority
        />
      </Box>
      <chakra.p fontSize="4xl">Coming Soon!</chakra.p>
    </>
  );
};
