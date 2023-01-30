import {
  Box,
  chakra,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import type { ServiceCategories, ServiceOptionKeys } from '@/_content';

import { PageLayout, SectionTitle, ServicesCoverImage } from '@/components/v1';
import { ChImage } from 'chakra.ui';

// import * as Face from '@/components/v1/icons';
import { capitalize, CDN_URL, unplauralize } from '@/utils';
import { getCardImages, optionsImagesMap } from '@/_content';
import options from '@/_content/services/options.json';

const prefixUrl = `${CDN_URL}/images/options`;

export const ServiceOptions: React.FC<{ path: string[] }> = ({ path }) => {
  const [category, service] = path;
  const categoryOptions = options[category as ServiceOptionKeys];

  return (
    <Container as="section" layerStyle="container.basic">
      <SimpleGrid columns={[2, 3, 5]} gap={8}>
        {categoryOptions?.options.map((option) => {
          const image = `${prefixUrl}/${
            optionsImagesMap[option as keyof typeof optionsImagesMap]
          }`;
          return (
            <VStack key={option} justify="space-between">
              <Box
                p={2}
                bg="white"
                rounded="full"
                shadow="md"
                h={28}
                w={28}
                overflow="hidden"
                border="4px solid"
                borderColor="gray.300"
              >
                <ChImage
                  src={image}
                  alt={option}
                  width={100}
                  height={100}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Text wordBreak="break-word" fontWeight="medium">
                {option}
              </Text>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

const ChLink = chakra(Link);

type ServiceDetailsPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ServiceDetailPage: NextPage = ({
  service,
  path,
}: ServiceDetailsPageProps) => {
  const image = getCardImages(path[0] as keyof ServiceCategories, service.slug);

  return (
    <PageLayout
      title={capitalize(path[1])}
      description={service.description}
      showCta
      showReviews
    >
      <SectionTitle title={capitalize(path[1])} />
      <ServicesCoverImage cover={image} />

      <Container
        layerStyle="container"
        py={16}
        bg="white"
        rounded="md"
        shadow="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SectionTitle title={service.title} />
        {service.description.length
          ? service.description.map((item: string) => {
              return (
                <Text
                  key={item}
                  py={4}
                  px={[6, 12, 32]}
                  textAlign="left"
                  w="full"
                  fontSize={['md', 'lg', 'xl']}
                >
                  {item}
                </Text>
              );
            })
          : null}
        <ChLink href={`/services/${path[0]}`} pt={12} fontWeight={600}>
          View More {capitalize(unplauralize(path[0]))} Services
        </ChLink>
      </Container>
      {/* @TODO: add options back in */}
      {/* <ServiceOptions path={path} /> */}
    </PageLayout>
  );
};

export default ServiceDetailPage;

async function getServicePaths() {
  try {
    const serviceList = await (
      await import('@/_content/services/arg.json')
    ).default;
    const paths = Object.keys(serviceList)
      .map((category) => {
        const currentServices =
          serviceList[category as keyof ServiceCategories].services;

        return currentServices?.map((service) => {
          return {
            params: { slug: [category, service.slug] },
          };
        });
      })
      .flat();
    return paths;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getServiceDetails(ctx: GetStaticPropsContext) {
  try {
    const serviceList = await (
      await import('@/_content/services/arg.json')
    ).default;
    const params = ctx.params?.slug;
    if (!params?.length) return { props: { service: {}, slug: '' } };

    const services =
      serviceList[params[0] as keyof ServiceCategories]?.services;

    return {
      props: {
        service: services.filter((service) => service.slug === params[1])[0],
        path: params,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { service: {}, path: [] } };
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getServicePaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (ctx) =>
  await getServiceDetails(ctx);
