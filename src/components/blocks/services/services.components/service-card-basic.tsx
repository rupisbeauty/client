import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type { SingleServiceSchema } from '.tina/validators';

import { singleServiceSchema } from '.tina/validators';
import { filename, unSlugifyFilename } from '@/utils';
import { trpc } from '@/utils/trpc';
import { ConditionallyRender } from '../../../utils/conditionally-render';

export const BasicServiceCard: React.FC<{
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

  return (
    <Stack
      direction="row"
      w="full"
      h="full"
      position="relative"
      bg="white"
      boxShadow="2xl"
      rounded="md"
      overflow="hidden"
    >
      <Box position="relative" w="full" minW="40%">
        <Image
          src={String(basicService?.image?.src)}
          alt={String(basicService?.image?.alt)}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
      <Stack dir="column" w="full" p={6} position="relative">
        <Stack h="full">
          <ConditionallyRender condition={!!basicService?.title}>
            <Heading
              as="h3"
              color={'teal.500'}
              fontSize={'2xl'}
              fontFamily={'body'}
              lineHeight="taller"
            >
              {basicService?.title}
            </Heading>
            <ServiceBadges
              data={basicService}
              hasOptions={hasOptions}
              hasServices={hasServices}
            />
          </ConditionallyRender>
          <ConditionallyRender condition={!!basicService?.description}>
            <Text color={'gray.500'}>{basicService?.description}</Text>
          </ConditionallyRender>
        </Stack>
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
              variant="solid"
              colorScheme="teal"
              w="full"
              href={encodeURI(`/sandbox/services/${basicService?.slug}`)}
            >
              Learn More
            </Button>
          </ButtonGroup>
        ) : null}
      </Stack>
    </Stack>
  );
};

const ServiceBadges: React.FC<{
  data: SingleServiceSchema;
  hasOptions: boolean;
  hasServices: boolean;
}> = ({ data, hasOptions, hasServices }) => {
  return (
    <Stack
      h="full"
      direction={'row'}
      align={'center'}
      justify="flex-start"
      maxW="120px"
      wrap={{ base: 'wrap', lg: 'nowrap' }}
    >
      <ConditionallyRender condition={hasOptions}>
        {data?.options?.slice(0, 2).map((option) => {
          const serviceOption = unSlugifyFilename(option.option ?? '');
          return (
            <Badge
              key={serviceOption}
              fontSize={[8, null, null, 8, 10, 12]}
              my={1}
              variant="outline"
              colorScheme="teal"
              ml={0}
              whiteSpace={{ base: 'nowrap' }}
              overflow={{ base: 'hidden', sm: 'initial' }}
              textOverflow={{ base: 'ellipsis', sm: 'initial' }}
              maxW={{ base: '120px', sm: 'initial' }}
            >
              {serviceOption}
            </Badge>
          );
        })}
      </ConditionallyRender>
      <ConditionallyRender condition={!hasOptions && hasServices}>
        {data?.relatedServices?.slice(0, 2).map((service) => {
          const serviceOption = unSlugifyFilename(service.service ?? '');
          return (
            <Badge
              key={serviceOption}
              fontSize={[8, null, null, 8, 10, 12]}
              my={1}
              variant="outline"
              colorScheme="teal"
              ml={0}
              whiteSpace={['nowrap']}
              overflow={['hidden', 'initial']}
              textOverflow={['ellipsis', 'initial']}
              maxW={['120px', 'initial']}
            >
              {serviceOption}
            </Badge>
          );
        })}
      </ConditionallyRender>
      <Badge
        fontSize={[8, null, null, 8, 10, 12]}
        my={1}
        variant="outline"
        colorScheme="yellow"
        ml={0}
        whiteSpace={['nowrap']}
        overflow={['hidden', 'initial']}
        textOverflow={['ellipsis', 'initial']}
        maxW={['120px', 'initial']}
      >
        {'+ More'}
      </Badge>
    </Stack>
  );
};
