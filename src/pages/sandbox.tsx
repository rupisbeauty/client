import { Hero } from '@/components/home';
import { ComingSoon } from '@/components/home/coming-soon';
import { CDN_URL } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import { HorizontalParallax, PageLayout } from 'chakra.ui';
import { useReducedMotion } from 'framer-motion';
import { type NextPage } from 'next';
import { Parallax } from 'react-parallax';
import { FramerParallax } from '../../chakra.ui/framer/parallax';
import { BRAND_DIR, isDev, LOCATIONS_DIR } from '../utils/constants';

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  color: 'black',
  border: '10px solid',
  // borderColor: 'var(--chakra-colors-primary)',
  borderColor: '#EDDFEF',
};

function ParallaxItem() {
  return (
    <chakra.div height={500} zIndex={1}>
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
        <Box
          w="sm"
          h="sm"
          bg="secondary"
          position="absolute"
          top="10em"
          right="20em"
          zIndex={0}
        />
        <FramerParallax offset={200}>
          <Initial />
        </FramerParallax>
        {shouldReduceMotion ? (
          <Box
            position="relative"
            zIndex={1}
            h="50vh"
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              w: 'full',
              h: '50vh',
              opacity: 0.4,
              zIndex: -1,
              bg: `url(${CDN_URL}${BRAND_DIR}/tile_background.png)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
            }}
          >
            <ParallaxItem />
          </Box>
        ) : (
          <Parallax
            bgImage={`${CDN_URL}${BRAND_DIR}/tile_background.png`}
            bgImageAlt="Rupi Pearl River, NY location interior"
            strength={-200}
            style={{ opacity: 0.35, backgroundColor: '#EDDFEF' }}
          >
            <ParallaxItem />
          </Parallax>
        )}
        <HorizontalParallax speed={1.5}>
          <chakra.h2
            color="bg"
            fontSize="9xl"
            __css={{
              '-webkit-text-stroke': '0.25px',
              '-webkit-text-stroke-color': '#D3B734',
            }}
          >{`Can't wait to meet you!`}</chakra.h2>
        </HorizontalParallax>
        <FramerParallax offset={200}>
          <Initial />
        </FramerParallax>
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
