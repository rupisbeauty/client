import { Container, Grid, useDisclosure } from '@chakra-ui/react';
import { CHModal } from 'chakra.ui';
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
          backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='%23ff7a7a' strokeWidth='5' stroke-dasharray='6%2c 14' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
          border-radius: 15px`}
        >
          {serviceImages.map((image) => (
            <ServiceBox key={image.fileName} image={image} />
          ))}
          <MoreBox onClick={onOpen} />
        </Grid>
      </Container>
    </>
  );
};
