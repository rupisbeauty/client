import { Box, Button, Center, useDisclosure } from '@chakra-ui/react';
import { Drawer } from 'chakra.ui';
import { MenuIcon } from '../../chakra.ui/icons/menu-icon';

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
      <Drawer {...{ isOpen, onOpen, onClose }} size="full" isFullHeight>
        Test
      </Drawer>
    </Box>
  );
};
