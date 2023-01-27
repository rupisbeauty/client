import type { GetStaticPropsContext } from 'next';
import type { PagesQuery } from '../__generated__/types';

import { client } from '../__generated__/client';

import { getBaseUrl } from '../../src/utils';

export const getPagesTinaPaths = async () => {
  try {
    const pages = await client.queries.pagesConnection();
    console.log('🦙running gsp1'); // , JSON.stringify(pages.data, null, 2))
    const paths = pages.data.pagesConnection.edges?.map((page) => ({
      params: {
        page: page?.node?._sys?.breadcrumbs,
      },
    }));
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...page].tsx:57 | error', error);
    return [];
  }
};

export const getCurrentPageTinaProps = async (context: GetStaticPropsContext) => {
  try {
    const page = context.params?.page as string[];
    const { data, query, variables } = await client.queries.pages({
      relativePath: `/${page.join('/')}.mdx`,
    });
    console.log('🦙running gsp2'); // , JSON.stringify(data, null, 2)
    return {
      data: data as PagesQuery,
      query: query,
      variables: variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...page].tsx:57 | error', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
