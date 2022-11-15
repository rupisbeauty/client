import { Map } from '@/components';
import { AspectRatio, Box } from '@chakra-ui/react';

export const MapContainer = () => {
  return (
    <Box ml="auto" borderRadius="md" p={4} boxShadow="md">
      <AspectRatio
        ratio={16 / 9}
        w={{ base: 425 / 1.5 + 'px', md: '425px' }}
        p={6}
      >
        <Map width={425} height={175} />
      </AspectRatio>
    </Box>
  );
};
