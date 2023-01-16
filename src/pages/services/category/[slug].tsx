import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import type {
  ServiceContent,
  ServiceDetails,
  ServiceImages,
  Services,
} from '@/_content';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { LicensedEmailCTA, PageLayout, SectionTitle } from '@/components';
import { CustomIcon } from 'chakra.ui';

import { slugify } from '@/utils';
import { getImages } from '@/_content';

const ServiceCategory: NextPage<{
  services: ServiceDetails[];
  category: keyof Services;
  content: ServiceContent;
}> = ({ services, category, content }) => {
  const icon = category === 'other' ? 'add' : category;

  const { cover, accents } = getImages(category as keyof ServiceImages);

  return (
    <PageLayout title={category} subtitle="Rupi Beauty Studio">
      <SectionTitle title={content.title} />
      <Container as="section" layerStyle="container" p={0}>
        <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
          <Image
            src={cover.src}
            width={cover.width}
            height={cover.height}
            alt="Beautiful woman | Image by valuavitaly on Freepik"
          />
        </Box>
      </Container>
      <Container as="section" layerStyle="container" centerContent>
        <HStack>
          <Box
            w="36"
            _before={{
              content: '""',
              w: '32',
              h: '32',
              bg: 'green.200',
              position: 'absolute',
              zIndex: -1,
              borderRadius: 'full',
            }}
          >
            <CustomIcon icon={icon} size={24} m={4} fill="gray.600" p={2} />
          </Box>
          <Box p={12}>
            {content.description.map((paragraph) => {
              return (
                <Text
                  key={slugify(paragraph.substring(0, 8))}
                  mb={6}
                  fontSize="lg"
                >
                  {paragraph}
                </Text>
              );
            })}
          </Box>
        </HStack>
        {services.map((service) => {
          return (
            <Box
              key={service.title}
              w="full"
              maxH="36vh"
              overflow="hidden"
              layerStyle="border"
              my={2}
              p={2}
            >
              {JSON.stringify(service)}
            </Box>
          );
        })}
      </Container>
      <LicensedEmailCTA />
    </PageLayout>
  );
};
export default ServiceCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const serviceList = await import('@/_content/services/arg.json');
  const paths = Object.keys(serviceList).map((key) => {
    return {
      params: { slug: key },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const serviceList = await import('@/_content/services/arg.json');
  const content = await import('@/_content/services/intros.json');
  console.log('cat', ctx.params?.slug);
  return {
    props: {
      services:
        serviceList[ctx.params?.slug as keyof Omit<Services, 'all'>].services,
      category: ctx.params?.slug,
      content: content[ctx.params?.slug as keyof Omit<Services, 'all'>],
    },
  };
};
