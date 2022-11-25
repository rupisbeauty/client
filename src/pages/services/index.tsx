import SectionTitle from '@/components/section-title';
import { ServiceCategory } from '@/components/services';
import { PEOPLE_DIR } from '@/utils';
import { Box, Container } from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';
import Image from 'next/image';
import services from '__data/company/service-details.json';
import body from '__data/company/waxing-service-details.json';
import { CDN_URL } from '../../utils/constants';

const ServiceListPage = () => {
  return (
    <PageLayout
      title="Services"
      subtitle="Test"
      description="Rupi beauty studio proudly offers a multitude of services that will help you look and feel your best!"
    >
      <SectionTitle title="Rupi Signature Services" />
      <Container w="full" maxW="container.lg" p={0} my={12}>
        <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
          <Image
            src={`${CDN_URL}${PEOPLE_DIR}/beautiful-woman.jpg`}
            width={1600}
            height={1200}
            alt="Beauiful woman | Image by valuavitaly on Freepik"
          />
        </Box>
      </Container>
      {services.map((service, i) => (
        <ServiceCategory
          key={service.title}
          service={service}
          flip={i % 2 === 0}
        />
      ))}
      <SectionTitle title="Body Waxing" />
      {body?.map((service, i) => (
        <ServiceCategory
          key={service.title}
          service={service}
          flip={i % 2 === 0}
        />
      ))}
    </PageLayout>
  );
};

export default ServiceListPage;
