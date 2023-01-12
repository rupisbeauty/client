import { Box, chakra, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <VStack>
      <chakra.h1
        color="gray.600"
        lineHeight="1"
        mb="-1em"
        fontSize={{ base: '4xl', sm: '5xl' }}
      >
        {title}
      </chakra.h1>
      <Box
        w={453 / 2}
        h={242 / 2}
        transform="scale(0.6) rotate(23deg)"
        aria-hidden={true}
      >
        <Image
          src="/leaves-stem.png"
          alt="Image by pikisuperstar on Freepik"
          width="453"
          height="242"
        />
      </Box>
    </VStack>
  );
};
