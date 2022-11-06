import { NavMenu } from '@/components';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { SEOConfig } from '@/utils/seo/base';
import type { ChakraProps, ContainerProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import layout from '__data/layout.json';
import { Sidebar } from '.';
import { AvatarMenu, Bar, ChakraNextImage, ModeToggle } from '../components';
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
          <Bar
            as="header"
            position="sticky"
            top={0}
            bg="brand.50"
            justifyContent="space-between"
            shadow="md"
          >
            <Box position="relative" w="80px" h="87px" flex={1}>
              <ChakraNextImage
                width="80"
                height="87"
                objectFit="contain"
                src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
                alt=""
                priority
              />
            </Box>
            {/* <NavMenu /> */}
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
            <VStack justify="flex-end">
              <Box position="relative" w="80px" h="87px" flex={1}>
                <ChakraNextImage
                  width="80"
                  height="87"
                  objectFit="contain"
                  src={`${CDN_URL}${BRAND_DIR}/rupi-title-w-icon.png`}
                  alt=""
                  priority
                />
                <Text fontSize="xl">&copy; {new Date().getFullYear()} </Text>
              </Box>
            </VStack>
          </Bar>
        </ScrollSlide>
      )}
    </Flex>
  );
};
