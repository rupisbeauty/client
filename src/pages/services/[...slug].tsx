import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import type { ServiceCategories, ServiceOptionKeys } from '@/_content';

import { PageLayout, SectionTitle, ServicesCoverImage } from '@/components';

import * as Face from '@/components/icons';
import { capitalize } from '@/utils';
import { getCardImages } from '@/_content';
import options from '@/_content/services/options.json';

const faceOptionsMap = {
  Eyebrows: Face.Eyebrows,
  Lip: Face.Lip,
  Nose: Face.Nose,
  'Lower-Lip': Face.LowerLip,
  Chin: Face.Chin,
  'Chin + Lower C': Face.LowerChin,
  Sides: Face.Side,
  Neck: Face.Neck,
  'Full Face': Face.Full,
  'Nose(Inside)': Face.Nose,
  'Nose(Outside)': Face.Nose,
};

export const ServiceOptions: React.FC<{ path: string[] }> = ({ path }) => {
  const [category, service] = path;
  const categoryOptions = options[category as ServiceOptionKeys];
  return (
    <Container as="section" layerStyle="container">
      <SimpleGrid columns={[1, 3, 5, 10]} columnGap={8}>
        {categoryOptions.options.map((option) => {
          const Icon = faceOptionsMap[option as keyof typeof faceOptionsMap];
          return (
            <VStack key={option} justify="space-between">
              <Box
                p={6}
                bg="white"
                rounded="full"
                shadow="md"
                h={28}
                w={28}
                overflow="hidden"
                border="2px solid lightpink"
              >
                <Icon />
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
      {JSON.stringify(service)}: {JSON.stringify(path)}
      <ServiceOptions path={path} />
    </PageLayout>
  );
};

export default ServiceDetailPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getServicePaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (ctx) =>
  await getServiceDetails(ctx);

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
    // const content = await import('@/_content/services/intros.json');
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
