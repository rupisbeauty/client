import { ColorModeScript } from '@chakra-ui/react';
import { config } from 'chakra.ui/theme/foundations/config';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://polyfill.io/v3/polyfill.min.js?features=WeakRef,BigInt"
            async
          />
          <Script
            id="crisp-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.$crisp=[];
                window.CRISP_WEBSITE_ID="ac7d03bd-2065-4273-9884-8125f93a4858";
                (function(){
                  const d = document;
                  const s = d.createElement("script");
                  s.src = "https://client.crisp.chat/l.js";
                  s.async = 1;
                  d.getElementsByTagName("head")[0].appendChild(s);
                })();`,
            }}
          />
          ;
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={config?.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
