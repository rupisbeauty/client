import { chakra, HStack, type ChakraProps } from '@chakra-ui/react';
import Link from 'next/link';

const ChNextLink = chakra(Link);

const menu = {
  about: '#about',
  services: '#services',
  reviews: '#reviews',
  contact: '#contact',
};

export const NavMenu = (props: ChakraProps) => {
  return (
    <HStack
      as="nav"
      w="full"
      flex={1}
      justify="flex-end"
      mr={20}
      fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
      gap={3}
      display={{ base: 'none', lg: 'flex' }}
      {...props}
    >
      {Object.keys(menu).length &&
        Object.entries(menu).map(([key, value]) => (
          <ChNextLink
            key={key}
            href={value}
            letterSpacing="widest"
            color="navLink"
            fontWeight={600}
            textShadow="md"
            _hover={{
              color: 'primary',
              textDecoration: 'none',
            }}
          >
            {key.toUpperCase()}
          </ChNextLink>
        ))}
    </HStack>
  );
};
