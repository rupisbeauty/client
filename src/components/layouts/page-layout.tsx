import { Box } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';

import type { LayoutProps } from 'chakra.ui/';
import type { FC } from 'react';

import { SocialShare } from '@/components';
import {
  Footer,
  Header,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import { SEOConfig } from '@/utils/seo/base';
import layout from '__data/layout.json';

export const PageLayout: FC<LayoutProps> = ({
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
