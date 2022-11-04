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
