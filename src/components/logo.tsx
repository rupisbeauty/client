import { Box, chakra, HStack, Text, VStack } from '@chakra-ui/react';

export const Logo = ({ title }: { title: string }) => {
  return (
    <HStack px={3} transform="scale(0.9)" gap={2} border="2px solid black">
      <chakra.h1 fontSize="3xl" color="brand.900" fontWeight="normal">
        {title.split(' ')[0]?.toUpperCase()}
      </chakra.h1>
      <Box h="3em" borderLeft="2px solid gray" />
      <VStack gap={1}>
        <Text fontSize="xl" color="brand.900" lineHeight="0.75rem">
          {title.split(' ')[1]?.toLowerCase()}
        </Text>
        <Text
          fontSize="xl"
          color="brand.900"
          lineHeight="0.75rem"
          letterSpacing="wider"
        >
          {title.split(' ')[2]?.toLowerCase()}
        </Text>
      </VStack>
    </HStack>
  );
};
