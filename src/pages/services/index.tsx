import SectionTitle from '@/components/section-title';
import { PEOPLE_DIR } from '@/utils';
import {
  Box,
  Center,
  chakra,
  Container,
  Divider,
  Grid,
  Stack,
} from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';
import Image from 'next/image';
import { CDN_URL, PLACEHOLDER_DIR } from '../../utils/constants';

interface Service {
  title: string;
  description: string;
  image: string;
  items: string[];
  packages?: string[];
}

const services: Service[] = [
  {
    title: 'Threading',
    description:
      'Our licensed Estheticians have the experience to help you with all of your threading needs',
    image: 'placeholder-rect.jpeg',
    items: [
      'Eyebrows',
      'Lip',
      'Lower Lip',
      'Chin',
      'Chin + Lower C',
      'Sides',
      'Neck',
      'Full Face',
    ],
  },
  {
    title: 'Waxing',
    description:
      'Our licensed Estheticians have the experience to help you with all of your waxing needs',
    image: 'placeholder-rect.jpeg',
    items: [
      'Eyebrows',
      'Lip',
      'Lower Lip',
      'Chin',
      'Chin + Lower C',
      'Sides',
      'Neck',
      'Full Face',
      'Nose (Inside)',
      'Nose (Outside)',
    ],
  },
  {
    title: 'Tinting',
    description:
      'Our licensed Estheticians have the experience to help you with all of your tinting needs',
    image: 'placeholder-rect.jpeg',
    items: ['Brows + Tint', 'Brow Tint', 'Last Tint'],
    packages: [
      'Lashlift + Tint',
      'Brow Lamination + Shaping + Tinting',
      'Lashlift + Brow Lamination',
    ],
  },
];

export const body: Service[] = [
  {
    title: 'Soft Wax',
    description: 'Soft waxing service',
    image: 'placeholder-rect.jpeg',
    items: [
      'Bikini',
      'Brailian',
      'Butt',
      'Underarm',
      'Half Arm',
      'Full Arm',
      'Upper Legs',
      'Lower Legs',
      'Full Legs',
      'Back',
      'Stomach',
      'Chest',
    ],
  },
  {
    title: 'Hard Wax',
    description: 'Hard waxing service',
    image: 'placeholder-rect.jpeg',
    items: [
      'Bikini',
      'Brailian',
      'Butt',
      'Underarm',
      'Half Arm',
      'Full Arm',
      'Upper Legs',
      'Lower Legs',
      'Full Legs',
      'Back',
      'Stomach',
      'Chest',
    ],
  },
];

export const ServiceCategory = ({
  service,
  flip,
}: {
  service: Service | undefined;
  flip?: boolean;
}) => (
  <Container
    w="full"
    maxW="container.lg"
    bg="white"
    borderRadius="md"
    mb="10em"
    p={16}
  >
    <Stack direction={{ base: 'column', lg: flip ? 'row' : 'row-reverse' }}>
      <Center w="full" p={2} bg="gray.100" rounded="md">
        <Image
          src={`${CDN_URL}${PLACEHOLDER_DIR}/${service?.image}`}
          width={600}
          height={405}
          alt=""
        />
      </Center>
      <Box w="full" p={3}>
        <chakra.h2 color="accent">{service?.title}</chakra.h2>
        <chakra.p>{service?.description}</chakra.p>
        <Divider borderColor="gray.200" pt={2} />
        <Grid templateColumns={'auto auto'} p={3}>
          {service?.items.map((serv) => (
            <chakra.p key={serv} w="50%" fontSize="md" fontWeight={600}>
              {serv}
            </chakra.p>
          ))}
        </Grid>
        {service?.packages ? (
          <>
            <Divider borderColor="gray.200" my={2} />
            <Box w="full">
              <chakra.h3 color="accent">Packages</chakra.h3>
              <Stack p={3}>
                {service.packages.map((pckg) => (
                  <chakra.p key={pckg} w="full" fontSize="lg" fontWeight={600}>
                    {pckg}
                  </chakra.p>
                ))}
              </Stack>
            </Box>
          </>
        ) : null}
      </Box>
    </Stack>
  </Container>
);

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
