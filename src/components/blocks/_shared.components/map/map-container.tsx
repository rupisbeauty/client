import { Center } from '@chakra-ui/react';

import type { FC } from 'react';

import { Map } from './map';

export const MapContainer: FC<{ address?: string }> = ({
  address = '24 Rowland Ave Clifton, NJ 07012',
}) => {
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
      <Map width={[300, 425]} height={[200, 280]} address={address} />
    </Center>
  );
};
