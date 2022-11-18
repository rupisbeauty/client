import { CDN_URL, SERVICES_DIR } from '@/utils';
import { AspectRatio, Box, chakra, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import licenses from '__data/company/service-licenses.json';

export const LicensesStack = () => (
  <Box
    position="relative"
    border="1px solid"
    borderColor="accent"
    rounded="2xl"
    pb={12}
  >
    <chakra.h2
      fontFamily="body"
      textDecoration="underline"
      mt={8}
      color="gray.600"
      fontSize={{ base: '2xl', md: '3xl' }}
    >
      State & Local Certifications:
    </chakra.h2>
    <chakra.p
      w={{ base: '100%', md: '60%', lg: '70%' }}
      fontSize={{ base: 'xl', lg: '2xl' }}
      textAlign="center"
      mx="auto"
    >
      Our estheticians are skilled and licensed in the following fields:
    </chakra.p>
    <Grid
      w="full"
      p={{ base: 4, lg: 9 }}
      gap={{ base: 12 }}
      alignItems="center"
      gridTemplateColumns={{
        base: 'auto',
        md: 'auto auto',
        lg: 'auto auto auto',
        xl: 'auto auto auto auto',
      }}
      justifyContent="center"
    >
      {licenses.map((image) => (
        <Box
          key={image.fileName}
          position="relative"
          // w="max(20vw, 100%)"
          // maxH={'300px'}
          mx="auto"
        >
          <AspectRatio ratio={4 / 3}>
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
          </AspectRatio>
          <Box
            position="relative"
            w="200px"
            zIndex={2}
            mt={-16}
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
  </Box>
);
