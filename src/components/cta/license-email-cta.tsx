import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import { ChImage, CustomIcon } from 'chakra.ui';

import { bgOutline, BRAND_DIR, CDN_URL } from '@/utils';
import images from '@/_content/images.json';

const licenseImage = images.find(
  (img) => img.title.toLowerCase() === 'state licensed logo'
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
    <Box as="section" my={24} bg="white" w="full" p={3} textAlign="center">
      <Container layerStyle="container" centerContent>
        <Heading as="h2" color="red.400" lineHeight={1.4} pt={6}>
          {content.title}
        </Heading>
        <Text color="gray.600" fontSize="2xl" lineHeight={2}>
          {content.subtitle}
        </Text>

        <HStack w="full" backgroundImage={bgOutline} p={6} gap={12}>
          <Box w="50%" p={4}>
            <Heading
              as="h3"
              fontSize="2xl"
              lineHeight={2}
              py={3}
              color="red.400"
              // textShadow="1px 3px 2px rgba(0,0,0,0.2)"
            >
              {content.cta.title}
            </Heading>
            <Text py={6} textAlign="left">
              {content.cta.subtitle}
            </Text>
            <FormControl>
              <FormLabel htmlFor="email" color="gray.600">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement mt={1}>
                  <CustomIcon icon="plane" size={'1.25rem'} />
                </InputLeftElement>
                <Input type="email" placeholder="you@youremail.com" />
                <InputRightAddon p={0} borderRadius="lg">
                  <Button type="submit" w="full" colorScheme="green">
                    Submit
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </FormControl>
          </Box>
          <ChImage
            src={`${CDN_URL}${BRAND_DIR}${licenseImage?.filename}`}
            alt={`${licenseImage?.alt} | ${licenseImage?.attr}`}
            width={300}
            height={300}
            objectFit="contain"
          />
        </HStack>
      </Container>
    </Box>
  );
};
