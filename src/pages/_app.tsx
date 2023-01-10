import { CookieConsent } from '@/components/consent';
import type { SessionWithUser } from '@/lib/next-auth/types/index';
import { type NextComponentTypeWithAuth } from '@/types';
import { ErrorBoundary } from '@/utils';
import { trpc } from '@/utils/trpc';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { Analytics } from '@vercel/analytics/react';
import { ChakraWrapper, FullScreenLoader } from 'chakra.ui';
import { SessionProvider, useSession } from 'next-auth/react';
import { type AppType } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

const MyApp: AppType<{ session: SessionWithUser | null; cookies: string }> = ({
  Component,
  pageProps: { session, cookies, ...pageProps },
  router,
}) => {
  const { auth } = Component as NextComponentTypeWithAuth;

  function appendScriptOnPage(pagesArray: string[]): boolean {
    return !!pagesArray.filter((page) => {
      if (page === '/') return true;
      return router.asPath.includes(page);
    }).length;
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <SkipNavLink mt={56} ml={4}>
        Skip to content
      </SkipNavLink>
      {appendScriptOnPage(['/', '/services']) ? (
        <Script src={process.env.NEXT_PUBLIC_TRUSTMARY} async />
      ) : null}
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
            <CookieConsent />
            <Analytics />
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
