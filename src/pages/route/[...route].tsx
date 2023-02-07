import { useTina } from 'tinacms/dist/react';

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { PageLayout } from '@/components';

import {
  getCurrentPageTinaProps,
  getPagesTinaPaths,
} from '.tina/_data-fetchers/routes';
import { RouteBlocks } from '@/components/blocks/templates/route-blocks';

// 5886
const TinaSandbox = (
  props: InferGetStaticPropsType<typeof getStaticProps>['props']
) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <PageLayout
      colors={{ backgroundColor: 'bg', color: 'text' }}
      settings={{
        showHeader: true,
        showFooter: true,
        showCta: false,
        showReviews: false,
      }}
      seo={{ title: 'Tina Sandbox', description: 'Tina Sandbox' }}
      {...data.routes}
    >
      <RouteBlocks {...data.routes} />
    </PageLayout>
  );
};

export default TinaSandbox;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPagesTinaPaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getCurrentPageTinaProps(context),
  revalidate: 300000,
});
