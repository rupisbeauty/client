import { CDN_URL, SERVICES_DIR } from '@/utils';
import { Box, chakra, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { licenses } from '../services';

export const LicensesStack = () => (
  <Grid
    w="full"
    mb={24}
    p={{ base: 4, lg: 12 }}
    gap={4}
    alignItems="center"
    gridTemplateColumns={{
      base: 'auto',
      md: 'auto auto',
      lg: 'auto auto auto',
    }}
    justifyContent="center"
  >
    {licenses.map((image) => (
      <Box key={image.fileName} position="relative" w="100%">
        <Image
          src={`${CDN_URL}${SERVICES_DIR}${image.fileName}`}
          alt={`${image.alt} | ${image?.attr}`}
          height={image.height}
          width={image.width}
          style={{
            borderRadius: '15px',
            boxShadow:
              '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
          }}
        />
        <Box
          position="relative"
          w="200px"
          zIndex={2}
          mt={-16}
          // border="1px"
          ml="auto"
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            background: 'white',
            top: 0,
            right: 0,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <chakra.p
            px={2}
            color="gray.600"
            fontWeight={600}
            fontSize={{ base: 'md', xl: 'xl' }}
          >
            {image?.title}
          </chakra.p>
        </Box>
      </Box>
    ))}
  </Grid>
);

/**
 *

 <Stack
    direction="row"
    px={24}
    justifyContent="center"
    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
    gap={{ base: 1, lg: 4 }}
    mx="auto"
  >
    <Badge rounded="md" p={2} colorScheme="gray">
      Make-up Artist
    </Badge>
    <Badge rounded="md" p={2} colorScheme="blue">
      Laser
    </Badge>
    <Badge rounded="md" p={2} colorScheme="purple">
      Body Cavitations
    </Badge>
    <Badge rounded="md" p={2} colorScheme="green">
      Hyloran Pen
    </Badge>
    <Badge rounded="md" p={2} colorScheme="yellow">
      Chemical Peeling
    </Badge>
    <Badge rounded="md" p={2} colorScheme="red">
      Micro-Needling
    </Badge>
    <Badge rounded="md" p={2} colorScheme="orange">
      Dermaplaning
    </Badge>
  </Stack>

 */
