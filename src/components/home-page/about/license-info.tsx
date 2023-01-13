import { Box, chakra } from '@chakra-ui/react';

import type { FC } from 'react';

import { bgOutline } from '@/utils';
import about from '__data/site/pages/home/about.json';

export const LicenseInfo: FC = () => (
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
        {about.subtitleEm}
      </chakra.span>{' '}
      {about.subtitle}
      <chakra.span display="block" color="gray.600">
        {about.aux}
      </chakra.span>
    </chakra.p>
  </Box>
);
