import { SEOConfig } from '@/utils/seo/base';
import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { AvatarMenu, ModeToggle } from '../components';
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
      <ModeToggle />
      <AvatarMenu />
      <Flex
        position="relative"
        flexDirection="column"
        w="full"
        h="100%"
        fontFamily="body"
        id="page-layout"
        bg="bodyBg"
      >
        {displayHeader && <Header />}
        <Sidebar />
        <Main>{children}</Main>
        {displayFooter && <Footer />}
      </Flex>
    </>
  );
};

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionBox
      as="main"
      layerStyle="main"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      // mt={24}
    >
      <Flex
        position="relative"
        w="full"
        px={12}
        direction="column"
        layerStyle="flex-center"
        h="100vh"
      >
        {children}
      </Flex>
    </MotionBox>
  );
};
