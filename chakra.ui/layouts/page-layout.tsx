import { Box } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';

import type { LayoutProps } from './types';

import { SocialShare } from '@/components';
import { SEOConfig } from '@/utils/seo/base';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { transitionDown as variants } from '../framer';
import { MotionBox } from '../framer/motion';
import { Footer } from './footer';
import { Header } from './header';

export const PageLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  children,
}) => {
  const displayHeader = layout?.structure?.header.show !== 'false';
  const displayFooter = layout?.structure?.footer.show !== 'false';

  return (
    <>
      <NextSeo {...SEOConfig(title, subtitle, description)} />
      <SocialShare twitter facebook pinterest />
      <Sidebar />
      {displayHeader && <Header />}
      <Main displayHeader={displayHeader}>{children}</Main>
      {displayFooter && <Footer />}
    </>
  );
};

const Main = ({
  children,
  displayHeader,
}: {
  displayHeader: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <SkipNavContent />
      <MotionBox
        as="main"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        position="relative"
        w="full"
        pt={displayHeader ? 6 : 0}
        mt={displayHeader ? 32 : 0}
        pb={displayHeader ? '1em' : 0}
      >
        <Box position="relative" w="full" overflowX="hidden">
          {children}
        </Box>
      </MotionBox>
    </>
  );
};
