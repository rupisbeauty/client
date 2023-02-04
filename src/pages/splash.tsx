import type { NextPage } from 'next';

import {
  About,
  ContactInfo,
  CoreServices,
  Hero,
  PageLayout,
  VisitLocationCTA,
} from '@/components';

// #81a2 Splash Page Removal
const Sandbox: NextPage = () => {
  return (
    <PageLayout title="Rupi Beauty Studio" showCta showReviews>
      <Hero />
      <VisitLocationCTA title="Come Visit Us At Our Newest Location" />
      <About />

      <CoreServices />
      <ContactInfo />
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
