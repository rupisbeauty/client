import type { NextPage } from 'next';

import {
  About,
  ContactInfo,
  CoreServices,
  Hero,
  PageLayout,
  VisitLocationCTA,
} from '@/components/v1';

const Sandbox: NextPage = () => {
  return (
    <PageLayout title="Rupi Beauty Studio" showCta showReviews>
      <Hero />
      <About />
      <VisitLocationCTA title="Come Visit Us At Our Newest Location" />

      <CoreServices />
      <ContactInfo />
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
