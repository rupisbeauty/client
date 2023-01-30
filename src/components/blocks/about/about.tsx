import { Box, chakra, Container, Divider, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import type { tinaSchema } from '@/schema';
import type { FC } from 'react';
import type { z } from 'zod';

import { FullLogo } from '../full-logo';
import { SectionTitle } from '../section/section-title';
import { Decorators } from './decorators';
import { LicenseInfo } from './license-info';
import { LicensesStack } from './licenses-stack';

import { CDN_URL, LOCATIONS_DIR } from '@/utils';
// import about from '__data/site/pages/home/about.json';

export const About: FC<z.TypeOf<typeof tinaSchema.about>> = ({
  title = 'About Us',
  heading,
  subheading,
  caption,
  description,
  image,
  showLicenses,
}) => {
  return (
    <Box w="full" bg="pink.50" py={24}>
      <Box my={20}>
        <SectionTitle title="About Us" />
      </Box>
      <Container
        id="about"
        as="section"
        position="relative"
        w="max(20vw, 100%)"
        maxW="container.xl"
        minH="100vh"
        centerContent
        p={{ sm: 12, md: 16 }}
        bg="white"
        borderRadius="3xl"
        mb={24}
        overflowX={{ base: 'hidden', lg: 'initial' }}
      >
        <Decorators />
        <FullLogo />
        <Divider borderColor="gray.200" />
        <chakra.h2
          fontSize={{ base: '4xl', xl: '6xl' }}
          color="secondary"
          fontFamily="body"
          letterSpacing="wider"
          lineHeight={1.3}
          pt={6}
          pb={12}
          textAlign="center"
        >
          {title}
        </chakra.h2>
        <Stack
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          mb={{ base: 3, md: 12 }}
        >
          {image ? (
            <Image
              src={String(image.src)}
              alt={String(image.alt)}
              width={(image.size?.width || 904) / 2}
              height={(image.size?.height || 1205) / 2}
              style={{ borderRadius: '15px' }}
            />
          ) : null}
          <Box w="full" h="full">
            <LicenseInfo
              heading={heading}
              subheading={subheading}
              caption={caption}
            />
            <Box
              color="gray.600"
              textAlign={{ base: 'justify' }}
              p={{ base: 2, md: 6 }}
            >
              <chakra.p fontSize={{ base: 'lg', lg: 'xl' }} mb={9}>
                {description}
              </chakra.p>
            </Box>
          </Box>
        </Stack>
        {showLicenses ? (
          <Box
            position="relative"
            textAlign="center"
            w={{ base: '80%', lg: 'full' }}
          >
            <LicensesStack heading={''} subheading={''} />
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};
