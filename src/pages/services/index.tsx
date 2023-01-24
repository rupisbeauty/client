import {
  Box,
  Container,
  Heading,
  Stack,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';

import type { ServiceImages, Services } from '@/_content/';
import type { NextPage } from 'next';

import {
  PageLayout,
  SectionTitle,
  TabMenu,
  TabPanelContent,
} from '@/components/v1';

import { CDN_URL, PEOPLE_DIR } from '@/utils';
import { allServices } from '@/_content/services';

const Sandbox: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const { ref, inView } = useInView({ threshold: 0.8 });

  const tabMenuItems = Object.keys(allServices);

  return (
    <PageLayout title="Services" subtitle="Rupi Beauty Studio" showCta showReviews>
      <SectionTitle title="Rupi Signature Services" />
      <Container as="section" layerStyle="container" centerContent maxW="">
        <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
          <Image
            src={`${CDN_URL}${PEOPLE_DIR}/woman-wavy-hair.webp`}
            width={1600}
            height={1200}
            alt="Beautiful woman | Image by valuavitaly on Freepik"
          />
        </Box>
        <Heading lineHeight="2.9" color="gray.600">
          Our Signature Services
        </Heading>
        <Text maxW="xl" textAlign="center" color="gray.600">
          We pride ourselves on providing you with the knowledge and experience
          you need to look your best. Select a service below learn more about
          how we can help you.
        </Text>
      </Container>
      <Container as="section" layerStyle="container" centerContent my={24}>
        <Stack w="full" borderRadius="md" direction="row" gap={6}>
          <Tabs
            bg="white"
            w="full"
            p={2}
            onChange={(index) => setActiveIndex(index)}
            borderRadius="15px"
            border="3px solid"
            borderColor="red.200"
          >
            <TabList gap={16}>
              <TabMenu items={tabMenuItems} />
            </TabList>
            <TabPanels>
              {Object.keys(allServices).map((serviceKey) => {
                const { services } = allServices[serviceKey as keyof Services];
                if (!services) return null;
                return (
                  <TabPanelContent
                    services={services}
                    serviceKey={serviceKey as keyof ServiceImages}
                    key={serviceKey}
                  />
                );
              })}
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default Sandbox;
