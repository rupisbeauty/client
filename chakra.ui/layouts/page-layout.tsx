import { SocialShare } from '@/components';
import { SEOConfig } from '@/utils/seo/base';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { transitionDown as variants } from '../framer';
import { MotionBox } from '../framer/motion';
import { Footer } from './footer';
import { Header } from './header';
import type { LayoutProps } from './types';

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
    <MotionBox
      as="main"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      position="relative"
      w="full"
      pt={displayHeader ? '10em' : 0}
      pb={displayHeader ? '1em' : 0}
    >
      <Box position="relative" w="full">
        {children}
      </Box>
    </MotionBox>
  );
};
