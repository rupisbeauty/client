import { CookieConsent } from '@/components/consent';
import { type SessionWithUser } from '@/lib/next-auth/types/index';
import { type NextComponentTypeWithAuth } from '@/types';
import { ErrorBoundary } from '@/utils';
import { trpc } from '@/utils/trpc';
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
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Script
        id="crisp-widget"
        strategy="afterInteractive"
        // dangerouslySetInnerHTML={{
        //   __html: ,
        // }}
      >
        {`
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
          (function(){
            const d = document;
            const s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();`}
      </Script>
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
