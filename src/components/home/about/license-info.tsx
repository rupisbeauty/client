import { Box, chakra } from '@chakra-ui/react';

export const LicenseInfo = () => (
  <Box w="full" p={{ base: 0, md: 16 }}>
    <chakra.p
      fontSize={{ base: 'xl', md: '3xl' }}
      fontWeight="bold"
      borderRadius="lg"
      px={12}
      py={4}
      my={20}
      textAlign="center"
      letterSpacing="wide"
      backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='27' ry='27' stroke='%23ff7a7a' strokeWidth='25' stroke-dasharray='13%2c 20%2c 15%2c 21' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
border-radius: 27px;`}
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
