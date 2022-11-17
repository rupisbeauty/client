import { Box, Container } from '@chakra-ui/react';
import { PageLayout } from 'chakra.ui';

const ServiceListPage = () => {
  return (
    <PageLayout
      title="Services"
      subtitle="Test"
      description="Rupi beauty studio proudly offers a multitude of services that will help you look and feel your best!"
    >
      <Container
        w="full"
        maxW="container.lg"
        bg="white"
        p={12}
        mt={32}
        h={'200vh'}
        borderRadius="lg"
      >
        <Box>test</Box>
      </Container>
    </PageLayout>
  );
};

export default ServiceListPage;
