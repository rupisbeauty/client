// @NOTE: see the useage of @use-cookie-consent-react for insight
// @link: https://github.com/use-cookie-consent/use-cookie-consent
import { getConsent } from '@/utils';
import { Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Banner } from './banner';

export const CookieConsent = () => {
  const [consent, setConsent] = useState<boolean>(false);
  const { onClose } = useDisclosure();

  useEffect(() => {
    const localConsent = getConsent();

    setConsent(localConsent);
  }, []);

  useEffect(() => {
    if (!consent) return;
    localStorage.setItem('rbs-consent', 'true');
  }, [consent]);

  return !consent ? (
    <Banner
      btnLabel="I Understand"
      onClick={() => setConsent(true)}
      onClose={onClose}
    >
      <Text fontWeight="medium">
        We use cookies to personalize content and provide you with a better
        browsing experience.
      </Text>
      <Text color="muted">Read our Privacy Policy</Text>
    </Banner>
  ) : null;
};
