import { BaseLayout, ComingSoon } from '@/components';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <BaseLayout
      title="Rupi Beauty Studio"
      description="Eyebrows, facials, waxing & more"
    >
      <ComingSoon />
    </BaseLayout>
  );
};

// @link: https://codepen.io/silvandiepen/pen/NOboze

export default Home;
