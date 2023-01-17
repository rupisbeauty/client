import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import type {
  ServiceContent,
  ServiceDetails,
  ServiceImages,
  Services,
} from '@/_content';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PageLayout, SectionTitle } from '@/components';
import { ChImage, CustomIcon } from 'chakra.ui';

import { capitalize, chunkArray, slugify } from '@/utils';
import { getImages } from '@/_content';

const ServiceCategory: NextPage<{
  services: ServiceDetails[];
  category: keyof Services;
  content: ServiceContent;
}> = ({ services, category, content }) => {
  const icon = category === 'other' ? 'add' : category;

  const chunkedServices = chunkArray(services, 2);

  const { cover, accents } = getImages(category as keyof ServiceImages);

  return (
    <PageLayout
      title={capitalize(category)}
      subtitle="Rupi Beauty Studio"
      showCta
      showReviews
    >
      <SectionTitle title={content.title} />
      <Container as="section" layerStyle="container" p={0}>
        <Box w="full" maxH="36vh" overflow="hidden" borderRadius="md">
          <ChImage
            src={cover.src}
            width={cover.width}
            height={cover.height}
            alt={cover.alt + ' | ' + cover.attr}
            {...cover.styles}
          />
        </Box>
      </Container>
      <Container as="section" layerStyle="container" centerContent>
        <>
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
          {chunkedServices.map((chunk, i) => {
            return (
              <VStack key={`chunk-${i}`}>
                <Box
                  w="full"
                  maxH="28vh"
                  my={12}
                  overflow="hidden"
                  borderRadius="md"
                >
                  <ChImage
                    src={String(accents[i]?.src)}
                    alt={`${accents[i]?.alt} | ${accents[i]?.attr}`}
                    width={accents[i]?.width}
                    height={accents[i]?.height}
                    {...accents[i]?.styles}
                    // objectFit="cover"
                  />
                </Box>
                <SimpleGrid
                  w="full"
                  overflow="hidden"
                  columns={[1, 2, 3]}
                  gap={6}
                >
                  {chunk.map((service) => {
                    return (
                      <Box
                        w="full"
                        p={6}
                        bg="white"
                        rounded="lg"
                        gap={3}
                        key={service.title}
                      >
                        <Heading as="h2" my={6} textTransform="capitalize">
                          {service.title}
                        </Heading>
                        <Text
                          key={slugify(service.description[0].substring(0, 8))}
                          py={2}
                          fontSize="lg"
                          fontWeight="normal"
                          lineHeight={1.6}
                        >
                          {service.description[0]}
                        </Text>
                      </Box>
                    );
                  })}
                </SimpleGrid>
              </VStack>
            );
          })}
        </>
      </Container>
    </PageLayout>
  );
};
export default ServiceCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const serviceList = await (
    await import('@/_content/services/arg.json')
  ).default;
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
  const serviceList = await (
    await import('@/_content/services/arg.json')
  ).default;
  const content = await (
    await import('@/_content/services/intros.json')
  ).default;

  return {
    props: {
      services:
        serviceList[ctx.params?.slug as keyof Omit<Services, 'all'>].services,
      category: ctx.params?.slug,
      content: content[ctx.params?.slug as keyof Omit<Services, 'all'>],
    },
  };
};
