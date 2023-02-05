import { Center } from '@chakra-ui/react';

import type { FC } from 'react';

import { Map } from '@/components/_v0';

export const MapContainer: FC = () => {
  return (
    <Center
      ml="auto"
      borderRadius="md"
      p={{ base: 0, md: 4, lg: 6 }}
      boxShadow="md"
      minW="455px"
      minHeight="300px"
      overflow="hidden"
    >
      <Map width={[300, 425]} height={[200, 280]} />
    </Center>
  );
};
