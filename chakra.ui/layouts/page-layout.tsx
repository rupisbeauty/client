import { SEOConfig } from '@/utils/seo/base';
import type { ChakraProps, ContainerProps, FlexProps } from '@chakra-ui/react';
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
      >
        {displayHeader && <Header />}
        <Sidebar />
        <MotionBox
          as="main"
          layerStyle="main"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          {children}
        </MotionBox>
        {displayFooter && <Footer />}
      </Flex>
    </>
  );
};
