import { Box, Container, Heading, Text } from '@chakra-ui/react';

import { StaticScrollBackground } from 'chakra.ui';

import { EmailSubscriptionForm } from '../forms';

export const EmailCTA = () => {
  return (
    <Box w="full" my={12}>
      <StaticScrollBackground bgImage="url(/girl-holding-money-pink-bg.webp)">
        <Container
          mr={[24, null, null, 56]}
          mt={28}
          w="full"
          p={[6, null, 9, 16]}
          bg="whiteAlpha.300"
          color="gray.700"
          textShadow="0 0 10px rgba(0,0,0,0.2)"
          boxShadow="0 0 10px rgba(255,255,255,0.4)"
        >
          <Heading
            fontSize={['3xl', null, '5xl']}
            fontWeight={600}
            color="gray.600"
          >
            Sign Up for our Mailing List.
          </Heading>
          <Text fontSize="xl" fontWeight={500} mt={6}>
            Get the latest in beauty news, updates, and special offers delivered
            directly to your inbox. No spam, ever.
          </Text>
          <EmailSubscriptionForm />
        </Container>
      </StaticScrollBackground>
    </Box>
  );
};
