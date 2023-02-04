import { SimpleGrid } from '@chakra-ui/react';

import type { AppRouter } from '@/server/trpc/router/_app';
import type { inferProcedureOutput } from '@trpc/server';

import { ChakraCard, ChakraCard2 } from './services.components';

import type { PagesBlocksServiceMenu } from '.tina';
import { trpc } from '@/utils/trpc';

export type AllServicesFrontMatter = inferProcedureOutput<
  AppRouter['mdx']['parseFMList']
>;

// n9ZOvMI0UGU @TODO: type this
// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const ServiceMenu = ({ options, relatedServices, ...props }: any) => {
  const filePaths = relatedServices?.length
    ? relatedServices?.map((service: { service: string }) => service.service)
    : [];

  const { data: allServices } = trpc.mdx.parseFMList.useQuery(
    { filePaths },
    { enabled: !!relatedServices?.length }
  );

  return (
    <SimpleGrid
      w={['full']}
      columns={[1, null, null, 2]}
      gap={[12]}
      p={6}
      m={0}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      {allServices &&
        Object.keys(allServices).map((serviceKey) => {
          const service = allServices[serviceKey];
          if (!service) return null;
          return <ChakraCard key={service.title} service={service} />;
        })}
    </SimpleGrid>
  );
};

export const ServiceMenuBlock: React.FC<PagesBlocksServiceMenu> = (props) => {
  return (
    <SimpleGrid
      w={['full']}
      columns={[1, null, null, 2]}
      gap={[12]}
      p={6}
      m={0}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      {props?.relatedServices &&
        props?.relatedServices.map((service) => {
          return (
            <ChakraCard2
              key={service?.service?.title}
              service={service?.service}
            />
          );
        })}
    </SimpleGrid>
  );
};
