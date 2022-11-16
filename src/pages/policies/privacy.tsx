import { FullLogo } from '@/components';
import { CDN_URL, PEOPLE_DIR } from '@/utils/constants';
import { Box, chakra, Container, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { PrivacyPolicyBody } from './content/privacy-policy-body';

const Privacy: NextPage = () => {
  return (
    <>
      <Box w="full" h="30vh" mx="auto" overflow="hidden">
        <Box transform="translateY(-15%)">
          <Image
            width="2400"
            height="1600"
            src={`${CDN_URL}${PEOPLE_DIR}/girl-looking-tenderly.jpg`}
            alt="woman getting facial treatment applied | Image by senivpetro on Freepik"
            priority
          />
        </Box>
      </Box>
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
