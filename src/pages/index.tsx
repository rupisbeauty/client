import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { trpc } from '../utils/trpc';

import { isDev } from '../utils/constants';
import styles from './index.module.css';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>Rupi&apos;s Beauty Studio</title>
        <meta name="description" content="Eyebrows, facials, waxing & more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <h1 className={styles.title}>
            <span className={styles.titlePink}>Rupi&apos;s</span> Beauty Studio
          </h1>
          <h2>Coming Soon!</h2>
          {isDev && (
            <div className={styles.helloFrom}>
              {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading...</p>}
            </div>
          )}
          <AuthShowcase />
        </div>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className={styles.authShowcase}>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className={styles.signInButton}
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <Link
        className={styles.cardDocumentation}
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
