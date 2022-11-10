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
import { FC, ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  btnLabel: string;
  onClick: () => void;
  onClose: () => void;
}

export const Banner: FC<BannerProps> = ({
  children,
  btnLabel,
  onClick,
  onClose,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      as="section"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      // pb={{ base: '12', md: '24' }}
      zIndex="banner"
    >
      <Box bg="primary" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container
          py={{ base: '4', md: '2.5' }}
          maxW="container.xl"
          position="relative"
        >
          <CloseButton
            display={{ sm: 'none' }}
            position="absolute"
            right="2"
            top="2"
            onClick={onClose}
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
                <Square size="12" bg="bg-subtle" borderRadius="md">
                  <Icon as={InfoIcon} boxSize="6" />
                </Square>
              )}
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: '0.5', md: '1.5' }}
                pe={{ base: '4', sm: '0' }}
              >
                {children}
              </Stack>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: '3', sm: '2' }}
              align={{ base: 'stretch', sm: 'center' }}
            >
              <Button variant="blue" width="full" onClick={onClick}>
                {btnLabel}
              </Button>
              <CloseButton
                display={{ base: 'none', sm: 'inline-flex' }}
                onClick={onClose}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
