import { Box,chakra,HStack } from '@chakra-ui/react';

import type { FC } from 'react';

import { ChImage } from 'chakra.ui';

import { BRAND_DIR,CDN_URL } from '@/utils';

// import images from '@/content/services/images/images.json';
const images = [
  {
    title: 'State Licensed Logo',
    filename: '/rupi-license-logo.png',
    width: 900,
    height: 564,
    alt: 'Licensed Esthetician in NY and NJ.',
    attr: 'Rupi Beauty Studio',
  },
  {
    title: 'NY State Certified',
    filename: '/ny-cert.webp',
    width: 622,
    height: 630,
    alt: 'Licensed Esthetician in NY.',
    attr: 'Rupi Beauty Studio',
  },
  {
    title: 'NJ State Certified',
    filename: '/nj-cert.webp',
    width: 622,
    height: 630,
    alt: 'Licensed Esthetician in NJ.',
    attr: 'Rupi Beauty Studio',
  },
  {
    filename: '/eyebrow-threading2.webp',
    title: 'Threading',
    alt: 'Eyebrow Threading',
    attr: 'Image by diana.grytsku',
    width: 1200,
    height: 800,
  },
  {
    filename: '/facial.webp',
    title: 'Facials',
    alt: 'Facial mask treatment',
    attr: 'Image by kroshka__nastya',
    width: 1200,
    height: 800,
  },
  {
    filename: '/lower-legs-waxing2.webp',
    title: 'Waxing',
    alt: 'Leg waxing treatment',
    attr: 'Image by prostooleh',
    width: 1200,
    height: 700,
  },
  {
    filename: '/micro-needling.web',
    title: 'Micro-needling',
    alt: 'Microneedling treatment',
    attr: 'Image by senivpetro',
    width: 1200,
    height: 800,
  },
];

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
