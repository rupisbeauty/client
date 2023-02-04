import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  chakra,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Drawer } from 'chakra.ui';
import { MenuIcon } from '../../chakra.ui/icons/menu-icon';
import { StoreIcon } from './home-page/contact';
import { FullLogo } from './home-page/contact/full-logo';

type MenuLink = Record<string, string>;
const menu: MenuLink = {
  home: '/',
  about: '/#about',
  services: '/services',
  reviews: '/#reviews',
  contact: '/#contact',
};

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="nav">
      <Box display={{ base: 'block', lg: 'none' }}>
        <Center
          as={Button}
          variant="outline"
          py={8}
          shadow="md"
          onClick={onOpen}
        >
          <MenuIcon w={12} h={12} fill="primary" />
        </Center>
      </Box>
      <Drawer
        {...{ isOpen, onOpen, onClose }}
        size="full"
        placement="right"
        isFullHeight
      >
        <Center w="100%" h="100%" p={24}>
          <VStack gap={4}>
            <FullLogo />
            {Object.entries(menu).map(([key, value]) => (
              <chakra.h2
                key={key}
                textTransform="capitalize"
                color="primary"
                cursor="pointer"
              >
                <Link
                  className="mobile-nav-link"
                  href={value}
                  onClick={onClose}
                >
                  {key}
                </Link>
              </chakra.h2>
            ))}
            <HStack pt={8} color="gray.600">
              <Center
                bg="bg"
                w={{ base: 8, md: 16 }}
                h={{ base: 8, md: 16 }}
                rounded="full"
                boxShadow="md"
                border="1px"
                borderColor="gray.600"
                transform="scale(0.8)"
              >
                <PhoneIcon
                  p={2}
                  w={{ base: 6, md: 12 }}
                  h={{ base: 6, md: 12 }}
                  color="gray.600"
                />
              </Center>
              <chakra.p fontSize="2xl" fontWeight={600}>
                (862) 571-7873
              </chakra.p>
            </HStack>
            <HStack color="gray.600">
              <Center
                bg="bg"
                w={{ base: 8, md: 16 }}
                h={{ base: 8, md: 16 }}
                rounded="full"
                boxShadow="md"
                border="1px"
                borderColor="gray.600"
                transform="scale(0.8)"
              >
                <StoreIcon
                  p={2}
                  width={{ base: 8, md: 16, lg: 24 }}
                  fill="gray.600"
                />
              </Center>
              <chakra.p fontSize="2xl" fontWeight={600}>
                2A Franklin Ave, Pearl River, NY 10965
              </chakra.p>
            </HStack>
          </VStack>
        </Center>
      </Drawer>
    </Box>
  );
};
