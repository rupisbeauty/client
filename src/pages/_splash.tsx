import { Hero } from '@/components/home-page';
import { ComingSoon } from '@/components/home-page/coming-soon';
import { PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';
import { isDev } from '../utils/constants';

const Home: NextPage = () => {
  return (
    <>
      <PageLayout
        title="Rupi Beauty Studio"
        description="Eyebrows, facials, waxing & more"
      >
        <ComingSoon />
      </PageLayout>
    </>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Home;

export const Initial = () => {
  return (
    <>
      {!isDev ? (
        <>
          <Hero />
        </>
      ) : (
        <ComingSoon />
      )}
    </>
  );
};
