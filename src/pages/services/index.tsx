import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';

import { PageLayout, SectionTitle, LegacyServiceCategory } from '@/components';

import { CDN_URL, PEOPLE_DIR } from '@/utils';

import data from '__data/company';

const ServiceListPage = () => {
  return (
    <PageLayout title="Services" subtitle="Rupi Beauty Studio">
      <SectionTitle title="Rupi Signature Services" />
      <Container w="full" maxW="container.lg" p={0} my={12}>
        <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
          <Image
            src={`${CDN_URL}${PEOPLE_DIR}/beautiful-woman.jpg`}
            width={1600}
            height={1200}
            alt="Beautiful woman | Image by valuavitaly on Freepik"
          />
        </Box>
      </Container>
      {data.details.map((service, i) => (
        <LegacyServiceCategory
          key={service.title}
          service={service}
          flip={i % 2 === 0}
        />
      ))}
      <SectionTitle title="Body Waxing" />
      {data.waxingService?.map((service, i) => (
        <LegacyServiceCategory
          key={service.title}
          service={service}
          flip={i % 2 === 0}
        />
      ))}
    </PageLayout>
  );
};

export default ServiceListPage;
