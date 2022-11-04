import { CDN_URL, LOCATIONS_DIR } from '@/utils';
import { Box, chakra, Grid } from '@chakra-ui/react';
import { ChakraNextImage } from 'chakra.ui';

export function HeroGrid() {
  return (
    <Grid h="auto" w="full" border="1px solid">
      <Box
        position="relative"
        gridArea="1 /1 / 2 / 2"
        justifySelf="start"
        alignSelf="start"
        mt={12}
        w={['40vw']}
      >
        <Box
          position="relative"
          borderRadius="rounded"
          boxShadow="sm"
          border="20px solid white"
          overflow="hidden"
        >
          <ChakraNextImage
            src={`${CDN_URL}${LOCATIONS_DIR}/pearl-river-interior.jpeg`}
            alt="interior of our pearl river location"
            width="877"
            height="565"
            priority
            objectFit="cover"
            borderRadius="rounded"
            overflow="hidden"
          />
        </Box>
        <svg></svg>
      </Box>
      <Box
        w="400px"
        h="32em"
        position="relative"
        margin="151px 0px 10px calc((100% - 980px) * 0.5)"
        left="570px"
        gridArea="1 / 1 / 2 / 2"
        justifySelf="start"
        alignSelf="start"
        boxShadow="sm"
      >
        <Box
          position="absolute"
          inset={0}
          backgroundColor="gray.300"
          borderRadius="rounded"
          border="20px solid white"
        >
          <Box w="100%" h="auto" position="relative" p={8}>
            <chakra.h2 fontSize="7xl" lineHeight="shorter" color="gray.600">
              Esthetics is our art.
            </chakra.h2>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
