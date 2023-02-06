import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useTina } from 'tinacms/dist/react';

import { PageLayout } from '@/components';

// import { serviceCategorySchema } from '.tina/validators';
import {
  getCurrentServiceTinaProps,
  getServicesTinaPaths,
} from '.tina/_data-fetchers/services';
import { ServiceBlocks } from '@/components/blocks/templates/service-blocks';

type ServicePageProps = InferGetStaticPropsType<typeof getStaticProps>['props'];

const TinaSandbox: React.FC<ServicePageProps> = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  // @FIXME: update zod schema
  // const service = serviceCategorySchema.parse(data?.categories);
  return data?.categories ? (
    <PageLayout {...data?.categories}>
      <ServiceBlocks {...data?.categories} />
    </PageLayout>
  ) : (
    <>Error loading markdown</>
  );
};

export default TinaSandbox;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getServicesTinaPaths(),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getCurrentServiceTinaProps(context),
  revalidate: 300000,
});
