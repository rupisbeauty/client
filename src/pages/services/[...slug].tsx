import { PageLayout } from '@/components';
import { capitalize } from '@/utils';
import type { ServiceCategories } from '@/_content';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

type ServiceDetailsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ServiceDetailPage: NextPage = ({
  service,
  path,
}: ServiceDetailsPageProps) => {
  return (
    <PageLayout title={capitalize(path[1])}>
      {JSON.stringify(service)}: {JSON.stringify(path)}
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
