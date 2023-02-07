import type { GetStaticPropsContext } from 'next';
import type { RoutesQuery } from '../__generated__/types';

import { client } from '../__generated__/client';

import { getBaseUrl } from '../../src/utils';

/**
 * @NOTE: used by getStaticPaths and getStaticProps

 * @SEE: 'src/pages/sandbox/[...route].tsx'
 *
 */

// 5886
export const getPagesTinaPaths = async () => {
  try {
    const routes = await client.queries.routesConnection();
    console.log('🦙running gsp1'); // , JSON.stringify(routes.data, null, 2))
    const paths = routes.data.routesConnection.edges?.map((route) => ({
      params: {
        route: route?.node?._sys?.breadcrumbs,
      },
    }));
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...route].tsx:57 | error', error);
    return [];
  }
};

export const getCurrentPageTinaProps = async (
  context: GetStaticPropsContext
) => {
  try {
    const page = context.params?.route as string[];
    const { data, query, variables } = await client.queries.routes({
      relativePath: `/${page.join('/')}.mdx`,
    });
    console.log('🦙running gsp2'); // , JSON.stringify(data, null, 2));
    return {
      data: data as RoutesQuery,
      query: query,
      variables: variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...route].tsx:57 | error', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
