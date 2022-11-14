import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box } from '@chakra-ui/react';
import { useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Parallax } from 'react-parallax';

export function ScrollSection({
  bgImage = `${CDN_URL}${BRAND_DIR}/tile_background.png`,
  bgColor = '#FDE4CC',
  strength = -200,
  children,
}: {
  bgImage?: string;
  bgColor?: string;
  strength?: number;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <Box
      position="relative"
      zIndex={1}
      minH="50vh"
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: 'full',
        h: '50vh',
        opacity: 0.4,
        zIndex: -1,
        bg: `url(${bgImage}) no-repeat`,
        backgroundPosition: ['left center', null, 'center center'],
        backgroundSize: '50% 50%',
      }}
    >
      {children}
    </Box>
  ) : (
    <>
      {/* <Box
        w="full"
        h="50vh"
        zIndex={-1}
        bg={bgColor}
        transform="translateY(50vh)"
      /> */}
      <Parallax
        bgImage={bgImage}
        bgImageAlt="Rupi Pearl River, NY location interior"
        strength={strength}
        style={{ backgroundColor: bgColor}}
        // bgStyle={{ backdropFilter: 'opacity(0.35)' }}
      >
        {children}
      </Parallax>
    </>
  );
}
