import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import type { CategoriesBlocksServiceMenu } from '.tina';

import { unplauralize } from '../../../utils/fns';
import { SectionTitle } from '../section';
import { ServiceCard, SimpleOptionCard } from './services.components';

export const ServiceMenuBlock: React.FC<any> = (props) => {
  // c3c9 @WIP
  // export const ServiceMenuBlock: React.FC<
  //   | (PagesBlocksServiceMenu & { category?: string })
  //   | (CategoriesBlocksServiceMenu & { category?: string })
  // > = (props) => {
  const serviceCols =
    props.relatedServices && Number(props.relatedServices?.length) > 1
      ? [1, null, null, 2]
      : 1;
  const optionCols =
    props.options && Number(props.options?.length) > 1 ? [1, null, 2, 4] : 1;
  return (
    <>
      {props?.options?.length ? (
        <Stack layerStyle="box.responsive" justify="center" align="center">
          <SectionTitle title="Call To Book Your Appointment" as={'h3'} />
          <ButtonGroup size="lg" colorScheme="teal" mx="auto" mt={6}>
            <Button
              as={Link}
              variant="solid"
              leftIcon={<PhoneIcon />}
              href="tel:8625717873"
            >
              Call To Book Now
            </Button>
          </ButtonGroup>
          {props?.category ? (
            <Text textStyle="description" pt={5}>
              Select from any of our professional{' '}
              {unplauralize(String(props?.category))} treatments below:
            </Text>
          ) : null}
        </Stack>
      ) : null}

      {props?.options?.length || props?.relatedServices?.length ? (
        <Box
          w="full"
          layerStyle="box.responsive"
          bg="rgba(45, 55, 72, 0.1)" // gray.700
          rounded="xl"
          p={4}
          mt={12}
          mb={24}
        >
          {props?.options?.length ? (
            <SimpleGrid
              w={['full']}
              columns={optionCols}
              gap={[12]}
              p={6}
              m={0}
              mx="auto"
              alignItems="center"
              justifyContent="center"
            >
              {props?.options?.map((option: any) => {
                // c3c9 @WIP -- remove any type -- option is inferred
                if (
                  option?.__typename == 'CategoriesBlocksServiceMenuOptions'
                ) {
                  return (
                    <SimpleOptionCard key={option?.option?.id} {...option} />
                  );
                }
              })}
            </SimpleGrid>
          ) : null}
          {props?.relatedServices?.length ? (
            <>
              {props?.options?.length ? (
                <>
                  <Divider borderColor="currentColor" my={4} />
                  <Heading
                    as="h3"
                    textAlign="center"
                    textDecor="underline"
                    py={6}
                  >
                    More {unplauralize(String(props?.category))} Related
                    Services
                  </Heading>
                </>
              ) : null}
              <SimpleGrid
                w={['full']}
                columns={serviceCols}
                gap={[12]}
                p={6}
                m={0}
                mx="auto"
                alignItems="center"
                justifyContent="center"
              >
                {props?.relatedServices &&
                  props?.relatedServices.map((service: any) => {
                    return (
                      <ServiceCard
                        key={service?.service?.title}
                        service={service?.service}
                        category={props?.category}
                      />
                    );
                  })}
              </SimpleGrid>
            </>
          ) : null}
        </Box>
      ) : null}
    </>
  );
};
