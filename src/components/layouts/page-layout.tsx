import { Box, chakra } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';

import type { tinaSchema } from '@/schema';
import type { FC } from 'react';
import type { z } from 'zod';

import { EmailCTA } from '../blocks';

import { SectionTitle, SocialShare } from '@/components/v1'; // @TODO: update to v2
import {
  Footer,
  Header,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import { SEOConfig } from '@/utils/seo/base';

export type LayoutProps = z.TypeOf<typeof tinaSchema.layout> & {
  subtitle?: string;
  children?: React.ReactNode;
};

export const PageLayout: FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  settings: {
    showHeader = false,
    showFooter = false,
    showCta = false,
    showReviews = false,
  },
  colors: { backgroundColor = 'bg', color = 'text' },
  // @TODO: add image from tina
  seo: { title: seoTitle, description: seoDescription, image: seoImage },
  children,
}) => {
  return (
    <>
      <NextSeo
        {...SEOConfig(
          seoTitle || title,
          subtitle,
          seoDescription || description
        )}
      />
      <SocialShare twitter facebook pinterest />
      <Sidebar />
      {showHeader && <Header />}
      <Main
        displayHeader={showHeader}
        backgroundColor={backgroundColor}
        color={color}
      >
        {children}
        {showCta ? <EmailCTA /> : null}
        {showReviews ? (
          <Box id="reviews" pt={16}>
            <SectionTitle title="Our Reviews" />
          </Box>
        ) : null}
      </Main>
      {showFooter && <Footer />}
    </>
  );
};

type MainProps = {
  backgroundColor: string;
  color: string;
  displayHeader: boolean;
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({
  backgroundColor,
  color,
  displayHeader,
  children,
}) => {
  return (
    <chakra.main bg={backgroundColor}>
      <SkipNavContent />
      <MotionBox
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        position="relative"
        w="full"
        pt={displayHeader ? 6 : 0}
        mt={displayHeader ? 36 : 0}
        pb={displayHeader ? '1em' : 0}
        minH="100vh"
        mb={20}
      >
        <Box position="relative" w="full" overflowX="hidden" color={color}>
          {children}
        </Box>
      </MotionBox>
    </chakra.main>
  );
};
