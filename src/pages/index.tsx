import { Hero } from '@/components/home';
import { ComingSoon } from '@/components/home/coming-soon';
import { PageLayout } from 'chakra.ui';
import { type NextPage } from 'next';
import { isDev } from '../utils/constants';

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  color: 'black',
};

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
