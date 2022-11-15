'use-client';

import {
  About,
  CoreServices,
  Hero,
  MapContainer,
  ScrollSection,
} from '@/components';
import { PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';

const Sandbox: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Hero />
      <ScrollSection>
        <MapContainer />
      </ScrollSection>
      <About />
      <CoreServices />
      <div data-trustmary-widget="CIUJC3KSW"></div>
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
