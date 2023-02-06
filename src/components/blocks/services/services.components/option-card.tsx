import { AspectRatio, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import type { CategoriesBlocksServiceMenuOptions } from '.tina';
import { truncate } from '@/utils';

export const OptionCard: React.FC<CategoriesBlocksServiceMenuOptions> = (
  props
) => {
  return (
    <Stack layerStyle="card.option" direction="row" minW="xl">
      <Flex
        layerStyle="card.header"
        position="relative"
        borderLeftRadius="xl"
        w="30%"
      >
        {props?.option?.price ? (
          <Box
            position="absolute"
            zIndex={2}
            bottom={4}
            left={0}
            boxSize={16}
            _after={{
              content: '""',
              position: 'absolute',
              width: 'full',
              height: 'full',
              background: 'white',
              bottom: 4,
              left: 2,
              zIndex: -1,
              opacity: 0.7,
              rounded: '100%',
              minH: '16',
            }}
          >
            <Flex w="full" justify="center" ml={1.5} mt={1}>
              <Heading
                px={2}
                color="gray.600"
                fontWeight={600}
                fontFamily="body"
                fontSize={{ base: 'md', xl: '2xl' }}
                data-tinafield="price"
              >
                ${props?.option?.price}
              </Heading>
            </Flex>
          </Box>
        ) : null}
        {props?.option?.image ? (
          <AspectRatio boxSize="100%">
            <Image
              fill={true}
              src={String(props?.option?.image?.src)}
              alt={String(props?.option?.image?.alt)}
              style={{
                objectFit: 'cover',
                objectPosition: String(
                  props?.option?.image?.pos?.objectPosition
                ),
                transform: String(props?.option?.image?.pos?.transform),
              }}
            />
          </AspectRatio>
        ) : null}
      </Flex>
      <Stack layerStyle="card.body" h="full">
        {props.option?.title ? (
          <Text px={3} textStyle="card.title-sm" data-tinafield="title">
            {props.option?.title}
          </Text>
        ) : null}

        {props.option?.description ? (
          <Text color="gray.700" px={3} data-tinafield="description">
            {truncate(props.option?.description, 175)}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  );
};

export const SimpleOptionCard: React.FC<CategoriesBlocksServiceMenuOptions> = (
  props
) => {
  return (
    <Flex
      layerStyle="card.header"
      position="relative"
      rounded="xl"
      w="100%"
      borderColor="gold"
      border="4px solid"
    >
      {props?.option?.price ? (
        <Box
          position="absolute"
          zIndex={2}
          bottom={4}
          left={0}
          boxSize={16}
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            backgroundColor: 'secondary',
            bottom: 4,
            left: 2,
            zIndex: -1,
            opacity: 0.7,
            rounded: '100%',
            minH: '16',
            border: '2px solid',
            borderColor: 'white',
          }}
        >
          <Flex w="full" justify="center" ml={1.5} mt={1}>
            <Heading
              px={2}
              color="gray.700"
              fontWeight={600}
              fontFamily="body"
              fontSize={{ base: 'md', xl: '2xl' }}
              // data-tinafield="price"
            >
              ${props?.option?.price}
            </Heading>
          </Flex>
        </Box>
      ) : null}
      <Box
        position="absolute"
        zIndex={2}
        top={1}
        right={1}
        minW="24"
        _after={{
          content: '""',
          position: 'absolute',
          width: 'full',
          height: 'full',
          backgroundColor: 'white',
          borderRadius: 'lg',
          top: 1,
          right: 0,
          zIndex: -1,
          opacity: 0.8,
          minH: '6',
        }}
      >
        <Flex w="full" h="full" justify="flex-end" mt={3} px={3}>
          <Heading
            px={2}
            color="accent"
            fontWeight={600}
            fontFamily="body"
            fontSize={{ base: 'md', xl: '2xl' }}
            // data-tinafield="price"
          >
            {props?.option?.title}
          </Heading>
        </Flex>
      </Box>
      {props?.option?.image ? (
        <AspectRatio boxSize="100%">
          <Image
            fill={true}
            src={String(props?.option?.image?.src)}
            alt={String(props?.option?.image?.alt)}
            style={{
              objectFit: 'cover',
              objectPosition: String(props?.option?.image?.pos?.objectPosition),
              transform: String(props?.option?.image?.pos?.transform),
            }}
          />
        </AspectRatio>
      ) : null}
    </Flex>
  );
};
