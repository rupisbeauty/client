// @NOTE: see the useage of @use-cookie-consent-react for insight
// @link: https://github.com/use-cookie-consent/use-cookie-consent
import { isBrowser } from '@/utils';
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Drawer } from 'chakra.ui';
import { useEffect, useState } from 'react';

function getAnonId() {
  if (!isBrowser) return undefined;
  return localStorage.getItem('__anon_id');
}

function getConsent(): boolean {
  if (!isBrowser) return false;
  const consent = localStorage.getItem('rbs-consent');
  if (consent !== null) return JSON.parse(consent);
  localStorage.setItem('rbs-consent', 'false');
  return false;
}

export const CookieConsent = () => {
  const [consent, setConsent] = useState<boolean>(false);
  const { onClose } = useDisclosure();

  const defaultPreferences = {
    hasConsented: false,
    preferences: false,
    support: false,
    analytics: false,
    statistics: false,
    marketing: false,
    essential: {
      security: true,
      session: true,
      persistent: true,
      necessary: true,
    },
  };

  useEffect(() => {
    const localConsent = getConsent();

    setConsent(localConsent);
  }, []);

  useEffect(() => {
    if (!consent) return;
    localStorage.setItem('rbs-consent', 'true');
  }, [consent]);

  function Header() {
    return (
      <Heading as="h3" pt={6}>
        Privacy Policy
      </Heading>
    );
  }

  return (
    <Drawer
      type="consent"
      isOpen={!consent}
      onClose={onClose}
      placement="bottom"
      Header={Header}
    >
      <HStack minH="3xs">
        <Text mr={16}>
          This site uses cookies to provide you with a better experience. Please
          accept the default settings to provide you with the best possible
          experience while browsing this site.
        </Text>
        <Box w="full" flex={1} ml="auto">
          <Button ml="auto" onClick={() => setConsent(true)}>
            I understand
          </Button>
        </Box>
      </HStack>
    </Drawer>
  );
};
