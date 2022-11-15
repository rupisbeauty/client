import { Box, chakra } from '@chakra-ui/react';

export const LicenseInfo = () => (
  <Box w="full" p={{ base: 0, lg: 16 }}>
    <chakra.p
      fontSize={{ base: 'xl', md: '3xl' }}
      fontWeight="bold"
      borderRadius="lg"
      px={12}
      py={4}
      my={20}
      textAlign="center"
      letterSpacing="wide"
      backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='%23ff7a7a' strokeWidth='5' stroke-dasharray='6%2c 14' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
      border-radius: 15px`}
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
