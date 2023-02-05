import { Box, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';

import { ChImage } from 'chakra.ui';
import { EmailSubscriptionForm } from '../forms/email-subscription-form';
import { SectionTitle } from '../section-title';

import { BRAND_DIR, CDN_URL } from '@/utils';
import images from '@/_content/services/images/images.json';

const licenseImages = images.filter(
  (img) =>
    img.title.toLowerCase().includes('ny') ||
    img.title.toLowerCase().includes('nj')
);

const content = {
  title: 'Take Advantage of our Experience',
  subtitle: 'Over 15 Years of Beauty Industry Experience',
  cta: {
    title: 'Sign up for great tips & fantastic savings',
    subtitle:
      'Stay informed about the latest trends, tools and more. Learn how we can help you empower your look and save money doing it!',
  },
};

export const LicensedEmailCTA: React.FC = () => {
  return (
    <Box as="section" mt={24} bg="white" w="full" p={3} textAlign="center">
      <Container layerStyle="container.basic" centerContent>
        <SectionTitle title={content.title} />
        <Text color="gray.600" fontSize="2xl" lineHeight={2}>
          {content.subtitle}
        </Text>
        <Box
          w="full"
          mt={12}
          p={[3, null, 6]}
          textAlign="center"
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
          bg="#FDE4CC"
        >
          <Heading
            as="h3"
            fontSize="3xl"
            lineHeight={2}
            py={3}
            color="gray.600"
          >
            {content.cta.title}
          </Heading>
          <Text
            py={[6, null, 3]}
            px={9}
            w="50%"
            mx="auto"
            color="gray.600"
            fontSize={{ lg: 'lg' }}
          >
            {content.cta.subtitle}
          </Text>
          <Stack
            w="full"
            direction={['column', null, 'row']}
            gap={[6, null, 12]}
            p={12}
          >
            <EmailSubscriptionForm />
            <HStack w="full" mx="auto" justify="flex-end" gap={2}>
              {licenseImages.length &&
                licenseImages.map((img) => (
                  <ChImage
                    key={img?.filename}
                    src={`${CDN_URL}${BRAND_DIR}${img?.filename}`}
                    alt={`${img?.alt} | ${img?.attr}`}
                    width={360 / 2.5}
                    height={360 / 2.5}
                    objectFit="contain"
                  />
                ))}
            </HStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
