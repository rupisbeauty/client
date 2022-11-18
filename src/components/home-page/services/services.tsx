import { bgOutline } from '@/utils';
import { Container, Grid, useDisclosure } from '@chakra-ui/react';
import { CHModal } from 'chakra.ui';
import { useRouter } from 'next/router';
import SectionTitle from '../../section-title';
import { MoreBox } from './more-box';
import { ServiceBox } from './service-box';
import { serviceImages } from './service-images';

export const ServicesModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <CHModal
      isOpen={isOpen}
      onClose={onClose}
      hasSubmit={false}
      allowClose={true}
      bg="bg"
    >
      Test
    </CHModal>
  );
};

export const CoreServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <ServicesModal isOpen={isOpen} onClose={onClose} />
      <Container
        as="section"
        id="services"
        position="relative"
        // w="max(20vw, 100%)"
        maxW="container.xl"
        minH="100vh"
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
