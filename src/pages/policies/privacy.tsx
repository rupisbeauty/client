import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import { FullLogo, PrivacyPolicyBody } from '@/components';

const Privacy: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Box w="full" h="30vh" mx="auto" overflow="hidden">
        <Box transform="translateY(-15%)">
          <Image
            width="2400"
            height="1600"
            src="/uploads/people/woman-tenderly-touching-skin.webp"
            alt="woman getting facial treatment applied | Image by senivpetro on Freepik"
            priority
          />
        </Box>
      </Box>
      <Flex pl={16}>
        <Button
          onClick={() => router.back()}
          variant="unstyled"
        >{`< Back`}</Button>
      </Flex>
      <Container
        w="full"
        maxW="container.lg"
        p={16}
        mx="auto"
        my={24}
        bg="white"
        borderRadius="lg"
        centerContent
      >
        <FullLogo />
        <Divider borderColor="gray.200" my={12} />
        <chakra.h1 color="primary">Privacy Policy</chakra.h1>
        <Box textAlign="left">
          <PrivacyPolicyBody />
        </Box>
      </Container>
    </>
  );
};

export default Privacy;
