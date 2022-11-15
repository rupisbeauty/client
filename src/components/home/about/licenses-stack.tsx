import { Badge, Stack } from '@chakra-ui/react';

export const LicensesStack = () => (
  <Stack
    direction="row"
    px={24}
    justifyContent="center"
    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
    gap={{ base: 1, lg: 4 }}
    mx="auto"
  >
    <Badge rounded="md" p={2} colorScheme="gray">
      Make-up Artist
    </Badge>
    <Badge rounded="md" p={2} colorScheme="blue">
      Laser
    </Badge>
    <Badge rounded="md" p={2} colorScheme="purple">
      Body Cavitations
    </Badge>
    <Badge rounded="md" p={2} colorScheme="green">
      Hyloran Pen
    </Badge>
    <Badge rounded="md" p={2} colorScheme="yellow">
      Chemical Peeling
    </Badge>
    <Badge rounded="md" p={2} colorScheme="red">
      Micro-Needling
    </Badge>
    <Badge rounded="md" p={2} colorScheme="orange">
      Dermaplaning
    </Badge>
  </Stack>
);
