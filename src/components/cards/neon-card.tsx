import {
Badge,
Box,
Center,
Heading,
HStack,
Image,
useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

import type { ServiceCategories,Services } from '@/_content';
import type { FC } from 'react';

import { getCardImages } from '@/_content';
import { MotionBox } from 'chakra.ui';

const categoryScheme: Record<keyof Services, string> = {
  all: 'purple',
  eyebrows: 'teal',
  facials: 'blue',
  waxing: 'green',
  other: 'red',
};

export const NeonCard: FC<{
  title: string;
  category: keyof ServiceCategories;
  slug: string;
}> = ({ title, category, slug }) => {
  const cardImage = getCardImages(category, slug);

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
              backgroundImage: `url(${cardImage})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              alt=""
              rounded={'lg'}
              height={115}
              width={282}
              objectFit={'cover'}
              src={cardImage}
            />
          </Box>
          <Heading
            pt={10}
            textAlign="center"
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
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
          <Badge colorScheme={String(categoryScheme[category])}>
            {category}
          </Badge>
        </HStack>
      </Box>
    </Center>
  );
};
