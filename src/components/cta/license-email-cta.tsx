import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ChImage, CustomIcon } from 'chakra.ui';

import { BRAND_DIR, CDN_URL } from '@/utils';
import { trpc } from '@/utils/trpc';
import images from '@/_content/services/images/images.json';

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
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const toast = useToast();
  const mutation = trpc.subs.subscribe.useMutation();

  useEffect(() => {
    const _sub = localStorage.getItem('subscribed');

    if (_sub === 'true') {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    mutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          console.log('success', data);
          toast({
            status: 'success',
            title: 'Success!',
            description: 'You have been subscribed to our mailing list.',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
          setSubscribed(true);
          localStorage.setItem('subscribed', 'true');
        },
        onError: (error) => {
          console.error('error', error);
          toast({
            status: 'error',
            title: 'Error signing up for our mailing list.',
            description: "Please ensure you've provided a valid email address.",
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
        },
      }
    );
  };

  return (
    <Box as="section" mt={24} bg="white" w="full" p={3} textAlign="center">
      <Container layerStyle="container" centerContent>
        <Heading as="h2" color="red.400" lineHeight={1.4} pt={6}>
          {content.title}
        </Heading>
        <Text color="gray.600" fontSize="2xl" lineHeight={2}>
          {content.subtitle}
        </Text>

        <Stack
          w="full"
          direction={['column', null, 'row']}
          mt={12}
          p={[3, null, 6]}
          gap={[6, null, 12]}
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
        >
          <chakra.form w="full" p={4} onSubmit={handleSubscribe}>
            <Heading
              as="h3"
              fontSize="2xl"
              lineHeight={2}
              py={3}
              color="red.400"
            >
              {content.cta.title}
            </Heading>
            <Text py={6} textAlign="left">
              {content.cta.subtitle}
            </Text>
            {!subscribed ? (
              <FormControl>
                <FormLabel htmlFor="email" color="gray.600">
                  Enter Your Email
                </FormLabel>
                <InputGroup size="lg">
                  <InputLeftElement mt={1}>
                    <CustomIcon icon="plane" size={'1.25rem'} />
                  </InputLeftElement>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@youremail.com"
                  />
                  <InputRightAddon p={0} borderRadius="lg">
                    <Button type="submit" w="full" colorScheme="green">
                      Submit
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>
            ) : (
              <Box>
                <Text
                  fontSize={['xl', null, 's3xl']}
                  fontWeight={600}
                  color="red.400"
                  textAlign="center"
                  my={3}
                >
                  Thanks you for being a valued subscriber to our mailing list.
                </Text>
                <Text fontSize="md"></Text>
              </Box>
            )}
          </chakra.form>
          <HStack w="full" mx="auto" justify="center">
            <ChImage
              src={`${CDN_URL}${BRAND_DIR}${licenseImage?.filename}`}
              alt={`${licenseImage?.alt} | ${licenseImage?.attr}`}
              width={360}
              height={360}
              objectFit="contain"
            />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
