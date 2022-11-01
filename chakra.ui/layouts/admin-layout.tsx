import { SEOConfig } from '@/utils/seo/base';
import { Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { AvatarMenu, Bar, ModeToggle } from '../components';
import { ScrollSlide, transitionDown as variants } from '../framer';
import { MotionContainer } from '../framer/motion';
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
      {displayHeader && (
        <ScrollSlide dir="up" from="top">
          <Bar as="header" position="sticky" top={0}>
            <Text color="white" fontSize="2xl">
              {title}
            </Text>
          </Bar>
        </ScrollSlide>
      )}
      <Sidebar />
      <MotionContainer
        as="main"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        layerStyle="main"
        centerContent
      >
        {children}
      </MotionContainer>
      {displayFooter && (
        <ScrollSlide dir="down" from="bottom">
          <Bar as="footer" position="sticky" bottom={0} h="36" maxH={'200px'}>
            <Text color="white" fontSize="2xl">
              {title}
            </Text>
          </Bar>
        </ScrollSlide>
      )}
    </Flex>
  );
};
