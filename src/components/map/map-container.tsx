import { Map } from '@/components';
import { AspectRatio, Box, chakra, Stack } from '@chakra-ui/react';

export const MapContainer = () => {
  return (
    <Box zIndex={1} height={500} display="flex" layerStyle="flex-center">
      <Stack
        direction="column"
        justifyContent="center"
        gap={6}
        borderRadius="lg"
        p={8}
        bg="white"
        shadow="md"
        my={6}
      >
        <chakra.h2
          color="secondary"
          lineHeight="1"
          textAlign="center"
          textShadow=""
        >
          Come Visit Us At Our Newest Location
        </chakra.h2>

        <Box
          ml="auto"
          p={2}
          border="1px"
          borderColor="gray.600"
          borderRadius="md"
        >
          <AspectRatio ratio={16 / 9}>
            <Map width={425} height={175} />
          </AspectRatio>
        </Box>
      </Stack>
    </Box>
  );
};
