import type { GetStaticPropsContext } from 'next';
import type { ServicesQuery } from '../__generated__/types';

import { client } from '../__generated__/client';

import { getBaseUrl } from '../../src/utils';

export const getServicesTinaPaths = async () => {
  try {
    const services = await client.queries.servicesConnection();
    const paths = services?.data?.servicesConnection?.edges?.map((service) => ({
      params: {
        service: service?.node?._sys?.breadcrumbs,
      },
    }));
    console.log('prod: 🦙running gsp1'); // , JSON.stringify(services.data, null, 2))
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...service].tsx:57 | error', error);
    return [];
  }
};

export const getCurrentServiceTinaProps = async (
  context: GetStaticPropsContext
) => {
  try {
    const service = context.params?.service as string[];
    const { data, query, variables } = await client.queries.services({
      relativePath: `/${service.join('/')}.mdx`,
    });
    return {
      data: data as ServicesQuery,
      query,
      variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...service].tsx:57 | error', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
