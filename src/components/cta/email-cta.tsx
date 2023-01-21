import {
  Box,
  Center,
  chakra,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import { EmailSubscriptionForm } from '../forms';

export const EmailCTA = () => {
  const bgWrap = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: '-1',
  };

  return (
    <Box w="full" mx="auto" my={12}>
      <Box
        height="100vh"
        width="full"
        overflow="hidden"
        bgImage="url(/girl-holding-money-pink-bg.webp)"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundAttachment="fixed"
        bgSize="cover"
        zIndex={-1}
      >
        <Box
          position="absolute"
          my={72}
          p={16}
          w="35%"
          ml={[72, null, '50%']}
          minH={'400px'}
          bg="whiteAlpha.300"
          color="gray.700"
          textShadow="0 0 10px rgba(0,0,0,0.3)"
          boxShadow="0 0 10px rgba(255,255,255,0.4)"
          sx={{
            perspective: '-1px',
          }}
        >
          <Heading fontSize="6xl" fontWeight={600}>
            Sign Up for our Mailing List.
          </Heading>
          <Text fontSize="xl" fontWeight={500} mt={6}>
            Get the latest news, updates, and special offers delivered directly
            to your inbox. No spam, ever.
          </Text>
          <EmailSubscriptionForm />
        </Box>
      </Box>
    </Box>
  );
};
