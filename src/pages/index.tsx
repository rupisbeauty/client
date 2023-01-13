import { Box } from '@chakra-ui/react';

import type { NextPage } from 'next';

import {
  About,
  ContactInfo,
  CoreServices,
  Hero,
  PageLayout,
  SectionTitle,
  VisitLocationCTA,
} from '@/components';

const Sandbox: NextPage = () => {
  return (
    <PageLayout title="Rupi Beauty Studio">
      <Hero />
      <VisitLocationCTA title="Come Visit Us At Our Newest Location" />
      <About />

      <CoreServices />
      <ContactInfo />
      <Box id="reviews" bg="white" pt={16}>
        <SectionTitle title="Our Reviews" />
        {/* <Box data-trustmary-widget="CIUJC3KSW" /> */}
      </Box>
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
