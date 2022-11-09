import { Hero } from '@/components/home';
import { ComingSoon } from '@/components/home/coming-soon';
import { CDN_URL } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';
import { useReducedMotion } from 'framer-motion';
import { type NextPage } from 'next';
import { Parallax } from 'react-parallax';
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

function ParallaxItem() {
  return (
    <chakra.div height={500}>
      <chakra.div sx={insideStyles}>Reverse direction</chakra.div>
    </chakra.div>
  );
}

const Sandbox: NextPage = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <PageLayout
        title="Rupi Beauty Studio"
        description="Eyebrows, facials, waxing & more"
      >
        <FramerParallax>
          <Initial />
        </FramerParallax>
        {!shouldReduceMotion ? (
          <Box
            bg={`url(${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg)`}
            backgroundRepeat="none"
            backgroundSize="cover"
            h="50vh"
          >
            {/* <ParallaxItem /> */}
          </Box>
        ) : (
          <Parallax
            bgImage={`${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg`}
            bgImageAlt="Rupi Pearl River, NY location interior"
            strength={-200}
          >
            <ParallaxItem />
          </Parallax>
        )}
      </PageLayout>
    </>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;

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
