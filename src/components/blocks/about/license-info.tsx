import { Box, chakra, HStack } from '@chakra-ui/react';

import type { FC } from 'react';

import { ChImage } from 'chakra.ui';

import { BRAND_DIR, CDN_URL } from '@/utils';

import images from '@/_content/services/images/images.json';

const licenseImages = images.filter(
  (img) =>
    img.title.toLowerCase().includes('ny') ||
    img.title.toLowerCase().includes('nj')
);
export const LicenseInfo: FC<{ heading: string; subheading: string, caption: string }> = ({
  heading,
  subheading,
  caption,
}) => {
  return (
    <Box
      w={['70%', null, null, 'full']}
      p={{ base: 0, lg: 16 }}
      mx="auto"
      my={[12, null, null, 0]}
    >
      <Box
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
          {heading}
        </chakra.span>{' '}
        {subheading}
        <chakra.p color="gray.600" fontSize="2xl">
          {caption}
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
      </Box>
    </Box>
  );
};
