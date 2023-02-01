import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Center,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { singleServiceSchema } from '.tina/validators';
import { filename, unSlugifyFilename } from '@/utils';
import { trpc } from '@/utils/trpc';
import { ConditionallyRender } from '../../utils/conditionally-render';

export const BasicServiceCard: React.FC<{ service: string }> = ({
  service,
}) => {
  const { data: serviceDetails } = trpc.mdx.parseFMList.useQuery(
    { filePaths: [service] },
    { enabled: !!service }
  );

  if (!serviceDetails) return null;
  const fileName = filename(service);
  const basicService = singleServiceSchema.parse(serviceDetails[fileName]);
  if (!basicService) return <>Parsing Validation Failed!</>;
  return (
    <Center py={6}>
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
          <ConditionallyRender condition={!!basicService.image}>
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image
                src={String(basicService.image?.src)}
                alt={String(basicService.image?.alt)}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </ConditionallyRender>
          <ConditionallyRender condition={!!basicService?.options?.length}>
            <Stack
              my={4}
              direction={'row'}
              // spacing={4}
              align={'center'}
              justify="flex-start"
              wrap="wrap"
            >
              {basicService.options.map((option) => {
                const serviceOption = unSlugifyFilename(option.option);
                return (
                  <Badge
                    key={serviceOption}
                    fontSize="0.7rem"
                    my={1}
                    variant="outline"
                    colorScheme="teal"
                  >
                    {serviceOption}
                  </Badge>
                );
              })}
            </Stack>
          </ConditionallyRender>
          <Stack>
            <ConditionallyRender condition={!!basicService.title}>
              <Stack direction="row">
                <Heading
                  color={'teal.500'}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
                  {basicService.title}
                </Heading>
              </Stack>
            </ConditionallyRender>
            <ConditionallyRender condition={!!basicService.description}>
              <Text color={'gray.500'}>{basicService.description}</Text>
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
                href={encodeURI(`/sandbox/services/${basicService.slug}`)}
              >
                See More Options
              </Button>
            </ButtonGroup>
          </ConditionallyRender>
        </Card>
      </ConditionallyRender>
    </Center>
  );
};
