import { Box,chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MotionBox } from 'chakra.ui';

import type { PagesBlocksCoreServicesRelatedServices } from '.tina';
import type { Category } from '../core-services-block';

const ChLink = chakra(Link);

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const ServiceBox: React.FC<{
  item: Category;
}> = ({ item }) => {
  return (
    <MotionBox
      key={item?.image?.src}
      position="relative"
      w="full"
      h="full"
      whileHover={{ y: -10 }}
    >
      <ChLink href={'#'}>
        {item.image ? (
          <Box w="full" h="full" objectFit="cover">
            <Image
              src={String(item?.image?.src)}
              alt={item.category}
              fill={true}
              style={{
                borderRadius: '15px',
                boxShadow:
                  '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
                objectFit: 'cover',
              }}
            />
          </Box>
        ) : null}
        <Box
          position="relative"
          w="80%"
          zIndex={2}
          mt={-14}
          ml="auto"
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            background: 'white',
            top: 0,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <chakra.p
            px={2}
            color="red.400"
            fontWeight={600}
            fontSize={{ base: 'lg', xl: '2xl' }}
            _before={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '1px',
              left: '1px',
            }}
            _after={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '2px',
              left: '2px',
            }}
          >
            {item.category}
          </chakra.p>
        </Box>
      </ChLink>
    </MotionBox>
  );
};


export const ServiceBox2: React.FC<{
  item: PagesBlocksCoreServicesRelatedServices['service'];
}> = (props) => {
  return (
    <MotionBox
      key={props.item?.image?.src}
      position="relative"
      w="full"
      h="full"
      whileHover={{ y: -10 }}
    >
      <ChLink href={'#'}>
        {props.item?.image ? (
          <Box w="full" h="full" objectFit="cover">
            <Image
              src={String(props.item?.image?.src)}
              alt={props.item?.title}
              fill={true}
              style={{
                borderRadius: '15px',
                boxShadow:
                  '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
                objectFit: 'cover',
              }}
            />
          </Box>
        ) : null}
        <Box
          position="relative"
          w="80%"
          zIndex={2}
          mt={-14}
          ml="auto"
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            background: 'white',
            top: 0,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <chakra.p
            px={2}
            color="red.400"
            fontWeight={600}
            fontSize={{ base: 'lg', xl: '2xl' }}
            _before={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '1px',
              left: '1px',
            }}
            _after={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '2px',
              left: '2px',
            }}
          >
            {props?.item?.title}
          </chakra.p>
        </Box>
      </ChLink>
    </MotionBox>
  );
};
