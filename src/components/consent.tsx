// @NOTE: see the useage of @use-cookie-consent-react for insight
// @link: https://github.com/use-cookie-consent/use-cookie-consent
import { chakra } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getConsent } from '@/utils';
import { Banner } from './banner';

const ChNextLink = chakra(Link);

export const CookieConsent = () => {
  const [consent, setConsent] = useState<boolean>(false);

  useEffect(() => {
    const localConsent = getConsent();

    setConsent(localConsent);
  }, []);

  useEffect(() => {
    if (!consent) return;
    localStorage.setItem('rbs-consent', 'true');
  }, [consent]);

  return !consent ? (
    <Banner btnLabel="I Understand" onClick={() => setConsent(true)}>
      <chakra.p fontWeight="medium" lineHeight={1.4}>
        We use cookies to personalize content and provide you with a better
        browsing experience.
      </chakra.p>
      <chakra.p
        fontSize="md"
        fontStyle="italic"
        color="gray.500"
        lineHeight={1.4}
      >
        For more info check out our
        <ChNextLink href="/policies/privacy" px={1} fontStyle="normal">
          Privacy Policy
        </ChNextLink>
      </chakra.p>
    </Banner>
  ) : null;
};
