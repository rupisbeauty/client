import { Hero } from '@/components/home';
import { BRAND_DIR, CDN_URL } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import { ChakraNextImage, PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';
import { isDev } from '../utils/constants';

const Home: NextPage = () => {
  return (
    <PageLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      {isDev ? <Hero /> : <ComingSoon />}
    </PageLayout>
  );
};

export default Home;

export const ComingSoon = () => {
  return (
    <>
      <Box position="relative" w="20vw" flex={1} height="100vh">
        <ChakraNextImage
          width="500"
          height="430"
          objectFit="contain"
          src={`${CDN_URL}${BRAND_DIR}/RUPI-NEW-LOGO-PNG-MD.png`}
          alt=""
          priority
        />
      </Box>
      <chakra.p fontSize="4xl">Coming Soon!</chakra.p>
    </>
  );
};
