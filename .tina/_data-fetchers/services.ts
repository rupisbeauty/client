import type { GetStaticPropsContext } from 'next';
import type { CategoriesQuery } from '../__generated__/types';

import { client } from '../__generated__/client';

import { getBaseUrl } from '../../src/utils';

/**
 * @NOTE: used by getStaticPaths and getStaticProps
 // SbfdQQqT @TODO: update this when out of sandbox
 * @SEE: 'src/pages/sandbox/services/[...service].tsx'
 *
 */


export const getServicesTinaPaths = async () => {
  try {
    const categories = await client.queries.categoriesConnection();
    const paths = categories?.data?.categoriesConnection?.edges?.map(
      (category) => ({
        params: {
          // x0AFBvRlUyDZmiP @FIXME: this is a hack to get the breadcrumbs to work
          service: category?.node?._sys?.breadcrumbs,
        },
      })
    );
    console.log('prod: 🦙running gsp1'); // , JSON.stringify(paths, null, 2));
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...category].tsx:57 | error', error);
    return [];
  }
};

export const getCurrentServiceTinaProps = async (
  context: GetStaticPropsContext
) => {
  try {
    // x0AFBvRlUyDZmiP @FIXME: this is a hack to get the breadcrumbs to work
    const category = context.params?.service as string[];
    const { data, query, variables } = await client.queries.categories({
      relativePath: `/${category.join('/')}.mdx`,
    });
    console.log('prod: 🦙running gsp2:'); // , JSON.stringify(data, null, 2));
    return {
      data: data as CategoriesQuery,
      query,
      variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...category].tsx:57 | error', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
