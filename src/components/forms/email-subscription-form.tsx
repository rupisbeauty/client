import {
  Box,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { trpc } from '@/utils/trpc';
import { CustomIcon } from 'chakra.ui';

export const EmailSubscriptionForm = () => {
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
    <chakra.form w="full" p={9} onSubmit={handleSubscribe}>
      {!subscribed ? (
        <FormControl>
          <FormLabel htmlFor="email" color="gray.600">
            Enter Your Email
          </FormLabel>
          <InputGroup size="md" bg="bg">
            <InputLeftElement mt={1}>
              <CustomIcon icon="plane" size={'1.25rem'} />
            </InputLeftElement>
            <Input type="email" name="email" placeholder="you@youremail.com" />
            <InputRightAddon p={0} m={0} borderRadius="lg" bg="transparent">
              <Button type="submit" w="full" colorScheme="green">
                Submit
              </Button>
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      ) : (
        <Box border="1px solid" borderColor="gray.400" rounded="md" shadow="md">
          <Heading color="red.400" mt={4}>
            You Are Already Subscribed
          </Heading>
          <Text
            fontSize={['xl', null, 's3xl']}
            fontWeight={500}
            textAlign="center"
            my={3}
          >
            Thank you for being a valued subscriber to our mailing list.
          </Text>
          <Text fontSize="md"></Text>
        </Box>
      )}
    </chakra.form>
  );
};
