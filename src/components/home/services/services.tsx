import { Container, Grid } from '@chakra-ui/react';
import { MoreBox } from './more-box';
import { ServiceBox } from './service-box';
import { serviceImages } from './service-images';
import SectionTitle from '../../section-title';


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
      'linear(to-b, #FFF1E4, #FDE4CC )',
    ]}
  >
    <SectionTitle title="Core Services" />
    <Grid
      w="full"
      my={16}
      p={{ base: 4, lg: 12 }}
      gap={9}
      alignItems="center"
      gridTemplateColumns={{
        base: 'auto',
        md: 'auto auto',
        lg: 'auto auto auto',
      }}
      justifyContent="center"
      backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='27' ry='27' stroke='%23D3B734' strokeWidth='5' stroke-dasharray='13%2c 20%2c 15%2c 21' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 27px;`}
    >
      {serviceImages.map((image) => (
        <ServiceBox key={image.fileName} image={image} />
      ))}
      <MoreBox />
    </Grid>
  </Container>
);
