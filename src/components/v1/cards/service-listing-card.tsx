import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import type { ServiceCategories } from '@/_content';
import type { FC } from 'react';

import { categoryColorScheme, getCardImages } from '@/_content';
import { ChImage, MotionBox } from 'chakra.ui';

export const ServiceListingCard: FC<{
  title: string;
  category: keyof ServiceCategories;
  slug: string;
}> = ({ title, category, slug }) => {
  const image = getCardImages(category, slug);
  // console.log('🚀 | file: service-listing-card.tsx:23 | image', image);
  return (
    <Center as={MotionBox} py={12} cursor="pointer" whileHover={{ scale: 1.1 }}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Link href={`/services/${category}/${slug}`}>
          {image ? (
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'115px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${image.src})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(10px)',
                },
              }}
            >
              <ChImage
                alt=""
                rounded={'lg'}
                height={115}
                width={282}
                objectFit={'cover'}
                src={image.src}
              />
            </Box>
          ) : null}

          <Heading
            pt={10}
            textAlign="center"
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
            noOfLines={1}
          >
            {title}
          </Heading>
        </Link>
        <HStack
          as={Link}
          w="full"
          justify="flex-end"
          pt={6}
          href={`/services/${category}`}
        >
          <Badge colorScheme={String(categoryColorScheme[category])}>
            {category}
          </Badge>
        </HStack>
      </Box>
    </Center>
  );
};
