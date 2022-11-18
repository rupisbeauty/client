import { bgOutline } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';

export const LicenseInfo = () => (
  <Box w="full" p={{ base: 0, lg: 16 }}>
    <chakra.p
      fontSize={{ base: 'xl', md: '3xl' }}
      fontWeight="bold"
      borderRadius="lg"
      px={12}
      py={4}
      my={{ base: 9, md: 0 }}
      textAlign="center"
      letterSpacing="wide"
      backgroundImage={bgOutline}
    >
      <chakra.span color="green.600" fontWeight={700}>
        Over 15 Years
      </chakra.span>{' '}
      of Esthetic Industry Experience
      <chakra.span display="block" color="gray.600">
        Licensed in NY / NJ
      </chakra.span>
    </chakra.p>
  </Box>
);
