import { Logo, NavMenu } from '@/components';
import { isDev } from '@/utils';
import { SEOConfig } from '@/utils/seo/base';
import type { ChakraProps, ContainerProps, FlexProps } from '@chakra-ui/react';
import { chakra, Flex, HStack, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { AvatarMenu, Bar, ModeToggle } from '../components';
import { ScrollSlide, transitionDown as variants } from '../framer';
import { MotionContainer } from '../framer/motion';
import type { LayoutProps } from './types';

const mainStyles: ChakraProps & ContainerProps & FlexProps = {
  flex: 1,
  maxW: 'container.lg',
  px: [4, null, 0],
  ml: 'auto',
  centerContent: true,
};

export const PageLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  children,
}) => {
  const displayHeader = layout?.structure?.header.show !== 'false';
  const displayFooter = layout?.structure?.footer.show !== 'false';

  return (
    <Flex flexDirection="column" w="full" fontFamily="body">
      <NextSeo {...SEOConfig(title, subtitle, description)} />
      <ModeToggle />
      <AvatarMenu />
      {displayHeader && (
        <ScrollSlide dir="up" from="top">
          <Bar
            as="header"
            position="sticky"
            top={0}
            bg="brand.50"
            justifyContent="space-between"
            shadow="md"
          >
            <Logo title={title} />
            <NavMenu />
          </Bar>
        </ScrollSlide>
      )}
      <Sidebar />
      <MotionContainer
        as="main"
        layerStyle="flex-center"
        sx={mainStyles}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </MotionContainer>
      {isDev && <chakra.section w="full" minH="90vh" bg="green" />}
      {displayFooter && (
        <ScrollSlide dir="down" from="bottom">
          <Bar
            as="footer"
            position="sticky"
            bottom={0}
            h="36"
            maxH={'200px'}
            bg="brand.50"
            color="brand.900"
            shadow="2xl-dark-"
          >
            <HStack align="flex-end">
              <Logo title={title} />
              <Text fontSize="xl">&copy; {new Date().getFullYear()} </Text>
            </HStack>
          </Bar>
        </ScrollSlide>
      )}
    </Flex>
  );
};
