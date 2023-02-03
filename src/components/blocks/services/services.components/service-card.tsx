import {
  AspectRatio,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type { SingleServiceSchema } from '.tina/validators';

import { ServiceBadges } from './service-option-badges';

import { singleServiceSchema } from '.tina/validators';
import { filename } from '@/utils';
import { trpc } from '@/utils/trpc';

export const ChakraCard: React.FC<{
  service: string | SingleServiceSchema;
}> = ({ service }) => {
  const { data: serviceDetails } = trpc.mdx.parseFMList.useQuery(
    { filePaths: typeof service === 'string' ? [service] : [''] },
    { enabled: typeof service === 'string' }
  );

  let fileName: string, basicService: SingleServiceSchema;

  if (typeof service === 'string') {
    if (!serviceDetails) return null;
    fileName = filename(service);

    basicService = singleServiceSchema.parse(
      serviceDetails[fileName as string]
    );
    if (!basicService) return <>Parsing Validation Failed!</>;
  } else {
    basicService = service as SingleServiceSchema;
  }

  const hasOptions = !!basicService?.options?.length;
  const hasServices = !!basicService?.relatedServices?.length;

  // @TODO: convert this into a generic reusable responsive card component
  return (
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm: '100%', lg: 'auto' }}
      h={{ sm: 'auto', lg: 'xs' }}
      minW={{ sm: 'auto', xl: 'xl' }}
      direction={{ base: 'column', md: 'row' }}
      bg="white"
      boxShadow={'2xl'}
      rounded="xl"
      mx="auto"
    >
      <Flex flex={1} bg="blue.200" overflow="hidden" borderLeftRadius="md">
        {basicService?.image ? (
          <AspectRatio boxSize="100%">
            <Image
              fill={true}
              src={String(basicService?.image?.src)}
              alt={String(basicService?.image?.alt)}
              {...basicService?.image?.pos}
            />
          </AspectRatio>
        ) : null}
      </Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        pt={6}
        px={2}
        pb={4}
        h="auto"
        gap={3}
      >
        {basicService?.title ? (
          <Heading px={3} fontSize={'2xl'} fontFamily={'body'} color="teal.40">
            {basicService?.title}
          </Heading>
        ) : null}

        {basicService?.description ? (
          <Text color="gray.700" px={3}>
            {basicService?.description}
          </Text>
        ) : null}
        <ServiceBadges
          data={basicService}
          hasOptions={hasOptions}
          hasServices={hasServices}
        />

        {hasOptions || hasServices ? (
          <ButtonGroup
            as={Stack}
            direction="row"
            w="full"
            mt={'auto'}
            align="center"
            alignSelf="flex-end"
            flex={0}
          >
            <Button
              as={Link}
              // SbfdQQqT @TODO: update this when out of sandbox
              href={encodeURI(`/sandbox/services/${basicService?.slug}`)}
              flex={1}
              fontSize={'sm'}
              colorScheme="teal"
              _focus={{
                bg: 'gray.200',
              }}
            >
              Learn More
            </Button>
          </ButtonGroup>
        ) : null}
      </Stack>
    </Stack>
  );
};
