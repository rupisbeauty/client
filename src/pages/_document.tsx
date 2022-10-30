import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { config } from '../../chakra.ui/theme/foundations/config';

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src="https://polyfill.io/v3/polyfill.min.js?features=WeakRef,BigInt"
            async
          />
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
