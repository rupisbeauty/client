import { Box, chakra, HStack, Stack } from '@chakra-ui/react';

import type { FC } from 'react';

import { ChImage } from 'chakra.ui';

import { BRAND_DIR, CDN_URL } from '@/utils';

import images from '@/_content/services/images/images.json';
import about from '__data/site/pages/home/about.json';

const licenseImages = images.filter(
  (img) =>
    img.title.toLowerCase().includes('ny') ||
    img.title.toLowerCase().includes('nj')
);
export const LicenseInfo: FC = () => {
  return (
    <Box
      w={['70%', null, null, 'full']}
      p={{ base: 0, lg: 16 }}
      mx="auto"
      my={[12, null, null, 0]}
    >
      <chakra.p
        fontSize={{ base: 'xl', md: '3xl' }}
        fontWeight="bold"
        px={12}
        py={4}
        my={{ base: 9, md: 0 }}
        textAlign="center"
        letterSpacing="wide"
        border="6px dashed"
        borderColor="red.200"
        borderRadius="10px"
      >
        <chakra.span color="green.600" fontWeight={700}>
          {about.subtitleEm}
        </chakra.span>{' '}
        {about.subtitle}
        <chakra.p color="gray.600" fontSize="2xl">
          {about.aux}
        </chakra.p>
        <HStack w="full" mx="auto" justify="center" gap={9} mt={12}>
          {licenseImages.length &&
            licenseImages.map((img) => (
              <ChImage
                key={img?.filename}
                src={`${CDN_URL}${BRAND_DIR}${img?.filename}`}
                alt={`${img?.alt} | ${img?.attr}`}
                width={360 / 4}
                height={360 / 4}
                objectFit="contain"
              />
            ))}
        </HStack>
      </chakra.p>
    </Box>
  );
};
