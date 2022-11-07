import { SEOConfig } from '@/utils/seo/base';
import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { AvatarMenu, ModeToggle } from '../components';
import { transitionDown as variants } from '../framer';
import { MotionContainer } from '../framer/motion';
import { Footer } from './footer';
import { Header } from './header';
import type { LayoutProps } from './types';

export const AdminLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  children,
}) => {
  const displayHeader = layout?.structure?.header.show !== 'false';
  const displayFooter = layout?.structure?.footer.show !== 'false';

  return (
    <Flex flexDirection="column">
      <NextSeo
        {...SEOConfig(title, subtitle, description)}
        noindex={true}
        nofollow={true}
      />
      <ModeToggle />
      <AvatarMenu />
      {displayHeader && <Header />}
      <Sidebar />
      <MotionContainer
        as="main"
        layerStyle="main"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </MotionContainer>
      {displayFooter && <Footer />}
    </Flex>
  );
};
