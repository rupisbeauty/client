import { Box, SimpleGrid } from '@chakra-ui/react';

import type {
  CategoriesBlocksServiceMenu,
  PagesBlocksServiceMenu,
} from '.tina';

import { OptionCard, ServiceCard } from './services.components';

export const ServiceMenuBlock: React.FC<
  PagesBlocksServiceMenu | CategoriesBlocksServiceMenu
> = (props) => {
  return (
    <Box
      w="full"
      layerStyle="box.responsive"
      bg="barBg"
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
              return <OptionCard key={option?.option?.id} {...option} />;
            }
          })}
        </SimpleGrid>
      ) : null}
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
              <ServiceCard
                key={service?.service?.title}
                service={service?.service}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};
