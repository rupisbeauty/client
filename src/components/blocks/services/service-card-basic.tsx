import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
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
import { ConditionallyRender } from '../../utils/conditionally-render';

export const BasicServiceCard: React.FC<{
  service: string | SingleServiceSchema;
}> = ({ service }) => {
  const { data: serviceDetails } = trpc.mdx.parseFMList.useQuery(
    { filePaths: [typeof service === 'string' ? service : ''] },
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

  return (
    <Box mx="auto">
      <ConditionallyRender condition={!!basicService}>
        <Card
          maxW={'md'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <ConditionallyRender condition={!!basicService?.image}>
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image
                src={String(basicService?.image?.src)}
                alt={String(basicService?.image?.alt)}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </ConditionallyRender>
          <ConditionallyRender condition={!!basicService?.options?.length}>
            <Stack
              mb={6}
              direction={'row'}
              // spacing={4}
              align={'center'}
              justify="flex-start"
              // wrap="wrap"
            >
              {basicService?.options?.slice(0, 2).map((option) => {
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
                    // maxW={{ base: '120px', sm: '' }}
                    maxW={{ base: '120px', sm: 'initial' }}
                    // sx={{
                    //   whiteSpace: '',
                    //   overflow: 'hidden',
                    //   textOverflow: 'ellipsis',
                    //   maxW: '120px',
                    // }}
                  >
                    {serviceOption}
                  </Badge>
                );
              })}
            </Stack>
          </ConditionallyRender>
          <Stack>
            <ConditionallyRender condition={!!basicService?.title}>
              <Stack direction="row">
                <Heading
                  color={'teal.500'}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
                  {basicService?.title}
                </Heading>
              </Stack>
            </ConditionallyRender>
            <ConditionallyRender condition={!!basicService?.description}>
              <Text color={'gray.500'}>{basicService?.description}</Text>
            </ConditionallyRender>
          </Stack>
          <ConditionallyRender condition={!!basicService?.options?.length}>
            <ButtonGroup
              as={Stack}
              direction="row"
              w="full"
              mt={6}
              align="center"
            >
              {/* convert button to styled link */}
              <Button
                as={Link}
                variant="solid"
                colorScheme="teal"
                w="full"
                href={encodeURI(`/sandbox/services/${basicService?.slug}`)}
              >
                See More Options
              </Button>
            </ButtonGroup>
          </ConditionallyRender>
        </Card>
      </ConditionallyRender>
    </Box>
  );
};
