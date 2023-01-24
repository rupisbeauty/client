import { SEOConfig } from '@/utils/seo/base';
import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import type { LayoutProps } from 'chakra.ui/layouts/types';
import type { FC } from 'react';

import {
  AvatarMenu,
  Footer,
  Header,
  ModeToggle,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import layout from '__data/layout.json';

export const AdminLayout: FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  children,
}) => {
  const displayHeader = layout?.structure?.header.show !== 'false';
  const displayFooter = layout?.structure?.footer.show !== 'false';

  return (
    <>
      <NextSeo
        {...SEOConfig(title, subtitle, description)}
        noindex={true}
        nofollow={true}
      />
      <ModeToggle />
      <AvatarMenu />
      <Flex
        position="relative"
        flexDirection="column"
        w="full"
        h="100%"
        fontFamily="body"
        id="admin-layout"
      >
        {displayHeader && <Header />}
        <Sidebar />
        <Main>{children}</Main>
        {displayFooter && <Footer />}
      </Flex>
    </>
  );
};

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionBox
      as="main"
      layerStyle="main"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <Flex
        position="relative"
        w="full"
        p={4}
        direction="column"
        layerStyle="flex-center"
      >
        {children}
      </Flex>
    </MotionBox>
  );
};
