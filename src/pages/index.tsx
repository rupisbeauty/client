import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

import { Box, Button, chakra, Flex } from '@chakra-ui/react';
import { cancelRetry, isDev } from '../utils';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>Rupi&apos;s Beauty Studio</title>
        <meta name="description" content="Eyebrows, facials, waxing & more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        display="flex"
        align="center"
        justify="center"
        w="full"
        minH="100vh"
      >
        <Flex
          w="full"
          maxW={['640px', '768px', '1024px', '1280px', '1536px']}
          minH="100vh"
          p={4}
          direction="column"
          align="center"
          justify="center"
        >
          <chakra.h1
            m={0}
            fontSize={[null, '4xl', '5xl']}
            fontWeight={800}
            lineHeight={1.5}
          >
            <Box as="span" color="rgba(216, 180, 254, 100%)">
              Rupi&apos;s
            </Box>{' '}
            Beauty Studio
          </chakra.h1>
          <chakra.h2 fontWeight={600}>Coming Soon!</chakra.h2>
          {isDev && (
            <Flex
              pt={2}
              fontSize="md"
              lineHeight="2rem"
              color="blue.500"
              direction="column"
              align="center"
              justify="center"
              w="full"
            >
              {hello.data ? (
                <chakra.p m={0}>{hello.data.greeting}</chakra.p>
              ) : (
                <p>Loading...</p>
              )}
            </Flex>
          )}
          <AuthShowcase />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined,
    {
      ...cancelRetry,
    }
  );

  const { data: sessionData } = useSession();

  return (
    <Flex m={1} direction="column" align="center" gap={4}>
      {sessionData && (
        <chakra.p>Logged in as {sessionData?.user?.name}</chakra.p>
      )}
      {secretMessage && <chakra.p>{secretMessage}</chakra.p>}
      <Button onClick={sessionData ? () => signOut() : () => signIn()}>
        {sessionData ? 'Sign out' : 'Sign in'}
      </Button>
    </Flex>
  );
};
