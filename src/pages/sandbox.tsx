import { ScrollSection } from '@/components';
import { Hero } from '@/components/home';
import { ComingSoon } from '@/components/home/coming-soon';
import { Hero2 } from '@/components/home/hero';
import { isDev } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import { FramerParallax, HorizontalParallax, PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';

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

const Slide = () => (
  <Box w="full" h="100vh" bg="green" border="1px solid red" />
);

const Sandbox: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      {/* <FramerParallax offset={200}> */}
      <Hero2 />
      {/* </FramerParallax> */}

      <ScrollSection>
        <ParallaxItem />
      </ScrollSection>

      {/* <HorizontalParallax speed={2.25}>
          <chakra.h2
            color="bg"
            fontSize="9xl"
            __css={{
              WebkitTextStroke: '0.25px',
              WebkitTextStrokeColor: '#D3B734',
            }}
          >{`Can't wait to meet you!`}</chakra.h2>
        </HorizontalParallax> */}
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
