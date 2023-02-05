import { Box, chakra } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';

import type { FC } from 'react';

import { MotionBox, transitionDown as variants } from 'chakra.ui';

import { SEOConfig } from '@/utils/seo/base';

export type LayoutProps = {
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
};

export const PageLayout: FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  children,
}) => {
  return (
    <>
      <NextSeo {...SEOConfig(title, subtitle, description)} />
      <Main>{children}</Main>
    </>
  );
};

type MainProps = {
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <chakra.main bg={'bg'}>
      <SkipNavContent />
      <MotionBox
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        position="relative"
        w="full"
        pt={0}
        mt={0}
        pb={0}
        minH="100vh"
      >
        <Box position="relative" w="full" overflowX="hidden" color={'text'}>
          {children}
        </Box>
      </MotionBox>
    </chakra.main>
  );
};
