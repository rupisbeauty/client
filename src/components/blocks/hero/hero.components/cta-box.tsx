import { Box,chakra,Divider,Flex,VStack } from '@chakra-ui/react';
import React from 'react';

import type { FC } from 'react';

import { CustomIcon } from 'chakra.ui';

export const CTABox: FC<{ cta: { title: string; subtitle: string } }> = ({ cta }) => (
  <Box
    position="absolute"
    bottom={{ base: 10, md: 24, lg: -4, xl: 12 }}
    height={24}
    bg="barBg"
    rounded="lg"
    shadow="lg"
    borderColor="gray.600"
    border="1px solid"
    zIndex={1}
    _hover={{
      bg: 'bg',
    }}
  >
    <Flex align="center" h="100%" p={{ base: 6, lg: 6 }} gap={1}>
      <VStack layerStyle="flex.center" w="10%">
        <CustomIcon
          icon="phone"
          size={[6, 10, 10, 10]}
          textShadow="0px 2px 3px #555"
          color="gray.600"
        />
      </VStack>
      <Divider transform="rotate(90deg)" w="3em" borderColor="gray.600" />
      <Box textAlign="center" w="full" flex={1}>
        <chakra.p
          display={{ base: 'none', sm: 'block', md: 'block' }}
          data-tinafield="title"
        >
          {cta.title}
        </chakra.p>
        <chakra.p
          fontSize={{ base: '2xl', md: '2xl', xl: '2xl' }}
          fontWeight={600}
          letterSpacing="wider"
          color="gray.600"
          lineHeight="1"
          textAlign="center"
          _hover={{
            cursor: 'pointer',
          }}
          data-tinafield="subtitle"
        >
          {cta.subtitle}
        </chakra.p>
      </Box>
    </Flex>
  </Box>
);
