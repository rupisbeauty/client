import { InfoIcon } from '@chakra-ui/icons';
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
import { CookieIcon } from 'chakra.ui';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';

interface BannerProps {
  children: ReactNode;
  btnLabel: string;
  onClick: () => void;
}

export const Banner: FC<BannerProps> = ({ children, btnLabel, onClick }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const boxShadow = useColorModeValue('sm', 'sm-dark');
  const [hide, setHide] = useState<boolean>(false);

  return !hide ? (
    <Box
      as="section"
      position="fixed"
      bottom={16}
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
        border="0.05px solid"
        borderColor="gray"
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
              onClick={onClick}
            >
              {btnLabel}
            </Button>
            <CloseButton
              display={{ base: 'none', sm: 'inline-flex' }}
              onClick={() => setHide(!hide)}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  ) : null;
};
