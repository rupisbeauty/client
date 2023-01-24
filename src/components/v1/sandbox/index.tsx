import {
  AspectRatio,
  Box,
  Button,
  CardBody,
  CardHeader,
  Container,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';
import { useState, type FC } from 'react';

import type { NextPage } from 'next';

import { ChImage, MotionCard, MotionCardBody } from 'chakra.ui';

import { PageLayout } from '@/components/v1';

import { CDN_URL, SERVICES_DIR } from '@/utils';
import services from '__data/company';

type ServiceCardProps = {
  fileName: string;
  alt: string;
  attr: string;
  width: number;
  height: number;
};

const cardBody = {
  w: 'full',
  bg: 'white',
  zIndex: 1,
  pb: 6,
  borderRadius: 'md',
  minH: '125px',
};

const ServiceCard: FC<ServiceCardProps & { children: React.ReactNode }> = ({
  fileName,
  alt,
  attr,
  width,
  height,
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <MotionCard
        as="article"
        w="full"
        position="relative"
        bg="white"
        maxH="230px"
        minW="15px"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        sx={{ cursor: 'pointer' }}
      >
        <AspectRatio ratio={16 / 9} w="full" zIndex={0}>
          <ChImage
            key={fileName}
            src={`${CDN_URL}${SERVICES_DIR}${fileName}`}
            alt={`${alt} | ${attr}`}
            height={height}
            width={width}
            boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)"
          />
        </AspectRatio>
        {show ? (
          <MotionCardBody
            {...cardBody}
            initial={{ y: 0 }}
            animate={{ y: -110 }}
            exit={{ y: 0 }}
          >
            {children}
          </MotionCardBody>
        ) : (
          <CardBody {...cardBody} transform="translateY(-16px)">
            {children}
          </CardBody>
        )}
      </MotionCard>
    </AnimatePresence>
  );
};

const Sandbox: NextPage = () => {
  // const [license] = services?.licenses;
  // if (!license) return null;
  return (
    <PageLayout title="sandbox">
      <Container w="full" maxW="7xl">
        <HStack w="full" gap={8}>
          {services.licenses.map((license) => {
            return (
              <ServiceCard key={license.fileName} {...license}>
                <CardHeader>
                  <Heading fontSize="xl">{license.title}</Heading>
                </CardHeader>
                <Text size="xs" isTruncated noOfLines={3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, aspernatur amet alias et sit laborum tempora ullam
                  perspiciatis nobis facere?
                </Text>
                <Box w="full" ml="auto">
                  <Button>More Info</Button>
                </Box>
              </ServiceCard>
            );
          })}
        </HStack>
      </Container>
    </PageLayout>
  );
};

export default Sandbox;
