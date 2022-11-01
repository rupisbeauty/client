import { type SessionWithUser } from '@/lib/next-auth/types/index';
import { type NextComponentTypeWithAuth } from '@/types';
import { ErrorBoundary } from '@/utils';
import { trpc } from '@/utils/trpc';
import { ChakraWrapper, FullScreenLoader } from 'chakra.ui';
import { SessionProvider, useSession } from 'next-auth/react';
import { type AppType } from 'next/app';
import Head from 'next/head';

const MyApp: AppType<{ session: SessionWithUser | null; cookies: string }> = ({
  Component,
  pageProps: { session, cookies, ...pageProps },
}) => {
  const { auth } = Component as NextComponentTypeWithAuth;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ErrorBoundary>
        <SessionProvider session={session}>
          <ChakraWrapper cookies={cookies}>
            {auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </ChakraWrapper>
        </SessionProvider>
      </ErrorBoundary>
    </>
  );
};

export default trpc.withTRPC(MyApp);

function Auth({ children }: { children: React.ReactNode }) {
  // @link: https://next-auth.js.org/getting-started/client#custom-client-session-handling
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <FullScreenLoader />;
  }

  return <>{children}</>;
}
