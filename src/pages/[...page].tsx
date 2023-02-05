import { useTina } from 'tinacms/dist/react';

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { PageLayout } from '@/components';

import { pageSchema } from '.tina';
import {
  getCurrentPageTinaProps,
  getPagesTinaPaths,
} from '.tina/_data-fetchers/pages';
import { PageBlocks } from '@/components/blocks/templates/page-blocks';

const TinaSandbox = (
  props: InferGetStaticPropsType<typeof getStaticProps>['props']
) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  // @FIXME: update zod schema
  // const page = pageSchema.parse(data.pages);
  return (
    <PageLayout {...data.pages}>
      <PageBlocks {...data.pages} />
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
