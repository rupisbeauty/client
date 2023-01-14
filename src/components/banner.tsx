import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import type { FC, ReactNode } from 'react';

import { isBrowser } from '@/utils';
import { CookieIcon } from 'chakra.ui';

interface BannerProps {
  children: ReactNode;
  btnLabel: string;
  consent: boolean;
  handleConsent: () => void;
}

export const Banner: FC<BannerProps> = ({
  children,
  btnLabel,
  consent,
  handleConsent,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const boxShadow = useColorModeValue('xl', 'xl-dark');
  const [hide, setHide] = useState<boolean>(consent);

  useEffect(() => {
    if (isBrowser && !consent) document.body.style.overflow = 'hidden';
    () => {
      if (isBrowser) document.body.style.overflow = 'visible';
    };
  }, []);

  return !hide ? (
    <>
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.300"
        overflow="hidden"
      />
      <Box
        as="section"
        position="fixed"
        bottom={96}
        left={0}
        right={0}
        zIndex="banner"
      >
        <Container
          py={{ base: '4', md: '2.5' }}
          maxW="container.xl"
          position="relative"
          rounded="md"
          bg="bg"
          boxShadow={boxShadow}
          border="5px solid"
          borderColor="yellow.400"
        >
          <CloseButton
            display={{ sm: 'none' }}
            position="absolute"
            right="2"
            top="2"
            onClick={() => setHide(!hide)}
          />
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            spacing={{ base: '3', md: '2' }}
          >
            <Stack
              spacing="4"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              {!isMobile && (
                <Square size="12" bg="primary" borderRadius="md" color="white">
                  <Icon as={CookieIcon} boxSize="6" />
                </Square>
              )}
              <Box pe={{ base: '4', sm: '0' }}>{children}</Box>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: '3', sm: '2' }}
              align={{ base: 'stretch', sm: 'center' }}
            >
              <Button
                variant="solid"
                colorScheme="yellow"
                width="full"
                onClick={handleConsent}
              >
                {btnLabel}
              </Button>
              <CloseButton
                display={{ base: 'none', sm: 'inline-flex' }}
                onClick={() => {
                  if (isBrowser) document.body.style.overflow = 'visible';
                  setHide(!hide);
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  ) : null;
};
