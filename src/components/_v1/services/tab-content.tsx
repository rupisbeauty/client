import {
  Box,
  Collapse,
  HStack,
  SimpleGrid,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';

import type {
  ServiceCategories,
  ServiceDetails,
  ServiceImages,
  Services,
} from '@/_content';

import { ServiceListingCard } from '@/components/_v1';
import { CustomIcon } from 'chakra.ui';

export const TabMenu: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <>
      {items.map((category: string) => {
        const icon =
          category?.toLowerCase() === 'other' ||
          category?.toLowerCase() === 'all'
            ? 'add'
            : category;
        return (
          <Tab
            key={`${category}-tab`}
            _selected={{ bg: 'red.100', fontWeight: 800 }}
            textTransform="capitalize"
            borderRadius="10px 10px 0 0"
          >
            <HStack gap={3} flexFlow="row">
              <CustomIcon icon={icon} size={'1.75rem'} stroke={'2em'} />
              <Text>{category}</Text>
            </HStack>
          </Tab>
        );
      })}
    </>
  );
};

export const TabPanelContent = ({
  serviceKey,
  services,
}: {
  serviceKey: keyof Services | keyof ServiceImages;
  services: ServiceDetails[];
}) => {
  return (
    <Collapse in={true} key={String(serviceKey)}>
      <TabPanel
        as={SimpleGrid}
        columns={[1, 2, 3]}
        maxH={'550px'}
        overflowY="scroll"
        gap={3}
      >
        {services.map((service) => {
          const currentServiceKey =
            serviceKey === 'all'
              ? (service.category as keyof ServiceCategories | keyof ServiceImages)
              : (serviceKey as keyof ServiceCategories);
          return (
            <Box
              key={service.title}
              w="full"
              bg="white"
              p={4}
              rounded="md"
              height="full"
              cursor="pointer"
            >
              <ServiceListingCard
                title={String(service.title)}
                category={currentServiceKey}
                slug={service.slug}
              />
            </Box>
          );
        })}
      </TabPanel>
    </Collapse>
  );
};
