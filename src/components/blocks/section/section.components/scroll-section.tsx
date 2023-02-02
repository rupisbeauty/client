import { Box } from '@chakra-ui/react';
import { useReducedMotion } from 'framer-motion';
import { Parallax } from 'react-parallax';

import type { FC,ReactNode } from 'react';

export const ScrollSection: FC<{
  bgImage?: string;
  strength?: number;
  children: ReactNode;
}> = ({
  bgImage = `/uploads/assets/brand/tile_background.webp`,
  strength = -200,
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <Box
      as="section"
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
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  ) : (
    <>
      <Parallax
        bgImage={bgImage}
        bgImageAlt="Rupi Pearl River, NY location interior"
        strength={strength}
        bgImageStyle={{ opacity: 0.35, objectFit: 'contain' }}
      >
        {children}
      </Parallax>
    </>
  );
};
