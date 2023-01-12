import Image from 'next/image';
import { AspectRatio,Box,chakra,Stack } from '@chakra-ui/react';

import { type NextPage } from 'next';

import {
  About,
  ContactInfo,
  CoreServices,
  Hero,
  ScrollSection,
  SectionTitle,
} from '@/components';
import { PageLayout } from 'chakra.ui';


const Sandbox: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <Hero />
      <ScrollSection>
        <Box zIndex={1} height={500} display="flex" layerStyle="flex-center">
          <Stack
            direction="column"
            justifyContent="center"
            gap={6}
            borderRadius="lg"
            p={8}
            bg="white"
            shadow="md"
            my={6}
          >
            <chakra.h2
              color="secondary"
              lineHeight="1"
              textAlign="center"
              textShadow=""
            >
              Come Visit Us At Our Newest Location
            </chakra.h2>
            <AspectRatio>
              <Image
                src="/map-image.png"
                alt="address: 2A Franklin Ave, Pearl River, NY 10965"
                width={257}
                height={146}
              />
            </AspectRatio>
          </Stack>
        </Box>
      </ScrollSection>
      <About />

      <Box id="reviews" bg="white" pt={16}>
        <SectionTitle title="Our Reviews" />
        <Box data-trustmary-widget="CIUJC3KSW" />
      </Box>
      <CoreServices />
      <ContactInfo />
    </PageLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Sandbox;
