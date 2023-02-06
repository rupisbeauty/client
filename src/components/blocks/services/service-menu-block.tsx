import { Box, SimpleGrid } from '@chakra-ui/react';

import type {
  CategoriesBlocksServiceMenu,
  PagesBlocksServiceMenu,
} from '.tina';

import { ServiceCard, SimpleOptionCard } from './services.components';

export const ServiceMenuBlock: React.FC<
  | (PagesBlocksServiceMenu & { category?: string })
  | (CategoriesBlocksServiceMenu & { category?: string })
> = (props) => {
  const serviceCols =
    props.relatedServices && Number(props.relatedServices?.length) > 1
      ? [1, null, null, 2]
      : 1;
  const optionCols =
    props.options && Number(props.options?.length) > 1 ? [1, null, 2, 4] : 1;
  return (
    <>
      {/* {props.relatedServices?.length ? (
        <Box
          w="full"
          layerStyle="box.responsive"
          bg="gray.400"
          rounded="xl"
          p={4}
          my={24}
        >
          <SimpleGrid
            w={['full']}
            columns={serviceCols}
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
      ) : null} */}
      {props?.options?.length ? (
        <Box
          w="full"
          layerStyle="box.responsive"
          bg="gray.700"
          rounded="xl"
          p={4}
          my={24}
        >
          <SimpleGrid
            w={['full']}
            columns={optionCols}
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
                return (
                  <SimpleOptionCard key={option?.option?.id} {...option} />
                );
              }
            })}
          </SimpleGrid>
          {props?.relatedServices?.length ? (
            <SimpleGrid
              w={['full']}
              columns={serviceCols}
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
          ) : null}
        </Box>
      ) : null}
    </>
  );
};
