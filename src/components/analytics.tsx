import { analytics } from '@/lib/analytics';
import type { SessionWithUser } from '@/lib/next-auth/types/index';
import { chakra } from '@chakra-ui/react';

import { useEffect } from 'react';

interface IAnalytics {
  asPath: string;
  session: SessionWithUser | null;
  children: React.ReactNode;
}

export const Analytics = ({ asPath, session, children }: IAnalytics) => {
  useEffect(() => {
    analytics.page();
  }, [asPath]);

  useEffect(() => {
    if (!session || !session.id) return;
    if (session.user) {
      analytics.identify(session.user.id, {
        name: session.user.name,
        id: session.user.id,
        email: session.user.email,
      });
    }
  }, [session]);

  return <chakra.div>{children}</chakra.div>;
};
