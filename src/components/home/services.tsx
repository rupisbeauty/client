import { CDN_URL, SERVICES_DIR } from '@/utils';
import { Box, chakra, Container, Grid, VStack } from '@chakra-ui/react';
import Image from 'next/image';

interface NextJSImage {
  fileName: string;
  title: string;
  alt: string;
  width: any; // next/image expects a value of type "SafeNumber
  height: any; // next/image expects a value of type "SafeNumber
  attr?: string;
}

const serviceImages: NextJSImage[] = [
  {
    fileName: '/service-eyebrow-threading2.jpg',
    title: 'Threading',
    alt: 'Eyebrow Threading',
    attr: 'Image by diana.grytsku',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-facial.jpg',
    title: 'Facials',
    alt: 'Facial mask treatment',
    attr: 'Image by kroshka__nastya',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-waxing-legs.jpg',
    title: 'Waxing',
    alt: 'Leg waxing treatment',
    attr: 'Image by prostooleh',
    width: '1200',
    height: '700',
  },
  {
    fileName: '/service-microneedling.jpg',
    title: 'Micro-needling',
    alt: 'Microneedling treatment',
    attr: 'Image by senivpetro',
    width: '1200',
    height: '800',
  },
];

export const CoreServices = () => (
  <Container
    as="section"
    id="services"
    position="relative"
    // w="max(20vw, 100%)"
    maxW="container.xl"
    minH="100vh"
    centerContent
    p={16}
    pt={{ lg: 32 }}
    bgGradient={[
      'linear(to-r, #FDE4CC, #FFF1E4 )',
      'linear(to-t, #FDE4CC, #FFF1E4 )',
    ]}
  >
    <VStack>
      <chakra.h1
        color="gray.600"
        lineHeight="1"
        mb="-1em"
        fontSize={{ base: '4xl', sm: '5xl' }}
      >
        Core Services
      </chakra.h1>
      <Box
        w={453 / 2}
        h={242 / 2}
        transform="scale(0.6) rotate(23deg)"
        aria-hidden={true}
      >
        <Image
          src="/leaves-stem.png"
          alt="Image by pikisuperstar on Freepik"
          width="453"
          height="242"
        />
      </Box>
    </VStack>
    <Grid
      w="full"
      my={16}
      p={{ base: 4, lg: 12 }}
      gap={9}
      gridTemplateColumns={{
        base: 'auto',
        md: 'auto auto',
        lg: 'auto auto auto',
      }}
      justifyContent="center"
      backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='27' ry='27' stroke='%23D3B734' stroke-width='5' stroke-dasharray='13%2c 20%2c 15%2c 21' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 27px;`}
    >
      {serviceImages.map((image) => (
        <Box
          key={image.fileName}
          position="relative"
          w="100%"
          _last={{
            gridColumnEnd: { base: 0, lg: -2 },
          }}
        >
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
            w="60%"
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
              zIndex: -1,
              opacity: 0.7,
            }}
          >
            <chakra.p
              px={2}
              color="gray.600"
              fontWeight={600}
              fontSize={{ base: 'lg', xl: '2xl' }}
            >
              {image?.title}
            </chakra.p>
          </Box>
        </Box>
      ))}
    </Grid>
  </Container>
);
