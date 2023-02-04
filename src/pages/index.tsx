import { ComingSoon,PageLayout } from '@/components';
import { type NextPage } from 'next';

// #81a2 Splash Page Removal
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
