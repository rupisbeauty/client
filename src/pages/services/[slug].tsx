import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import type {
  CDNImage,
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

const CoverImage: React.FC<{ cover: CDNImage }> = ({ cover }) => {
  return (
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
  );
};

const CircleBgIcon: React.FC<{ icon: string; bg: string }> = ({ icon, bg }) => {
  return (
    <Box
      w="36"
      _before={{
        content: '""',
        w: '32',
        h: '32',
        bg,
        position: 'absolute',
        zIndex: -1,
        borderRadius: 'full',
      }}
    >
      <CustomIcon icon={icon} size={24} m={4} fill="gray.600" p={2} />
    </Box>
  );
};

const ServiceCategory: NextPage<{
  services: ServiceDetails[];
  category: keyof Services;
  content: ServiceContent;
}> = ({ services, category, content }) => {
  const icon = category === 'other' ? 'add' : category;

  // Split services into chunks of 6, will return original array if length is less than 6
  // otherwise it will divide the array into multi=dimensional chunks of 6
  // this allows us to properly add accent images in between the service chunks
  const chunkedServices = chunkArray(services, 2, 7);

  const { cover, accents } = getImages(category as keyof ServiceImages);

  return (
    <PageLayout
      title={capitalize(category)}
      subtitle="Rupi Beauty Studio"
      showCta
      showReviews
    >
      <SectionTitle title={content.title} />
      <CoverImage cover={cover} />
      <Container as="section" layerStyle="container" centerContent>
        <Box>
          <HStack>
            <CircleBgIcon icon={icon} bg="green.200" />
            {content.description.map((paragraph) => {
              return (
                <Text
                  p={12}
                  key={slugify(paragraph.substring(0, 8))}
                  mb={6}
                  fontSize="lg"
                >
                  {paragraph}
                </Text>
              );
            })}
          </HStack>
          {chunkedServices &&
          chunkedServices.length &&
          !Array.isArray(chunkedServices[0]) ? (
            <VStack>
              <Box
                w="full"
                maxH="28vh"
                my={12}
                overflow="hidden"
                borderRadius="md"
              >
                <ChImage
                  src={String(accents[0]?.src)}
                  alt={`${accents[0]?.alt} | ${accents[0]?.attr}`}
                  width={accents[0]?.width}
                  height={accents[0]?.height}
                  {...accents[0]?.styles}
                />
              </Box>
              <SimpleGrid
                w="full"
                overflow="hidden"
                columns={[1, 2, 3]}
                gap={6}
              >
                {chunkedServices.map((service) => {
                  return (
                    <Link
                      key={service.title}
                      href={`/services/${category}/${service.slug}`}
                    >
                      <Box w="full" p={6} bg="white" rounded="lg" gap={3}>
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
                    </Link>
                  );
                })}
              </SimpleGrid>
            </VStack>
          ) : (
            chunkedServices.map((chunk, i) => {
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
                    />
                  </Box>
                  <SimpleGrid
                    w="full"
                    overflow="hidden"
                    columns={[1, 2, 3]}
                    gap={6}
                  >
                    {chunk.map((service: ServiceDetails) => {
                      return (
                        <Link
                          key={service.title}
                          href={`/${category}/${service.slug}`}
                        >
                          <Box w="full" p={6} bg="white" rounded="lg" gap={3}>
                            <Heading as="h2" my={6} textTransform="capitalize">
                              {service.title}
                            </Heading>
                            <Text
                              key={slugify(
                                String(service?.description[0]?.substring(0, 8))
                              )}
                              py={2}
                              fontSize="lg"
                              fontWeight="normal"
                              lineHeight={1.6}
                            >
                              {service.description[0]}
                            </Text>
                          </Box>
                        </Link>
                      );
                    })}
                  </SimpleGrid>
                </VStack>
              );
            })
          )}
        </Box>
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
