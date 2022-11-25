import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const Decorators = () => {
  return (
    <>
      <Box
        w="64"
        h="72"
        position="absolute"
        top="12em"
        right="-8em"
        zIndex={1}
        transform="scale(0.6)"
        display={{ base: 'none', lg: 'block' }}
      >
        <Image src="/rose-petals-set1.png" alt="" width="1200" height="1430" />
      </Box>
      <Box
        w="64"
        h="72"
        position="absolute"
        bottom="16em"
        left="-8em"
        zIndex={1}
        transform="scale(0.6)"
        display={{ base: 'none', md: 'block' }}
      >
        <Image src="/rose-petals-set2.png" alt="" width="1200" height="1430" />
      </Box>
    </>
  );
};
