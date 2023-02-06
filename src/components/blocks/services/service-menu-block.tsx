import { Box, SimpleGrid } from '@chakra-ui/react';

import type {
  CategoriesBlocksServiceMenu,
  PagesBlocksServiceMenu,
} from '.tina';

import { OptionCard, ServiceCard } from './services.components';

export const ServiceMenuBlock: React.FC<
  | (PagesBlocksServiceMenu & { category?: string })
  | (CategoriesBlocksServiceMenu & { category?: string })
> = (props) => {
  const singleCol =
    props.relatedServices && Number(props.relatedServices?.length) > 1
      ? [1, null, null, 2]
      : 1;
  return (
    <Box
      w="full"
      layerStyle="box.responsive"
      bg="gray.700"
      rounded="xl"
      p={4}
      my={24}
    >
      {props?.options?.length ? (
        <SimpleGrid
          w={['full']}
          columns={[1, null, 2]}
          gap={[12]}
          p={6}
          m={0}
          mx="auto"
          alignItems="center"
          justifyContent="center"
        >
          {props?.options.map((option) => {
            if (option?.__typename == 'CategoriesBlocksServiceMenuOptions') {
              // @NOTE: we only need to display options for categories, pages wont have options
              return <OptionCard key={option?.option?.id} {...option} />;
            }
          })}
        </SimpleGrid>
      ) : null}
      <SimpleGrid
        w={['full']}
        columns={singleCol}
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
              <ServiceCard
                key={service?.service?.title}
                service={service?.service}
                category={props?.category}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};
