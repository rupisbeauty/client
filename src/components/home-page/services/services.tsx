import { Container, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { SectionTitle } from '../../section-title';
import { MoreBox } from './more-box';
import { ServiceBox } from './service-box';

import { bgOutline } from '@/utils';

import serviceImages from '__data/company/service-thumbnails.json';

export const CoreServices = () => {
  const router = useRouter();
  return (
    <>
      <Container
        as="section"
        id="services"
        position="relative"
        maxW="container.xl"
        centerContent
        p={{ sm: 12, md: 16 }}
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
          backgroundImage={bgOutline}
        >
          {serviceImages.map((image) => (
            <ServiceBox key={image.fileName} image={image} />
          ))}
          <MoreBox onClick={() => router.push('/services')} />
        </Grid>
      </Container>
    </>
  );
};
