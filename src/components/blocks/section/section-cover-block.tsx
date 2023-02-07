import { AspectRatio,Container } from '@chakra-ui/react';
import Image from 'next/image';

import type {
CategoriesBlocksSectionCover,
PagesBlocksSectionCover,
RoutesBlocksSectionCover
} from '.tina';

const defaultPos = {
  objectFit: 'cover',
  objectPosition: 'top center',
  transform: 'scale(1)',
};

// 5886
export const SectionCoverBlock: React.FC<
  | PagesBlocksSectionCover
  | CategoriesBlocksSectionCover
  | RoutesBlocksSectionCover
> = (props) => {
  const objectFit = props?.image?.pos?.objectFit;
  const imagePosStyle = Object.assign(defaultPos, {
    ...props?.image?.pos,
    objectFit: objectFit || defaultPos.objectFit,
  });
  return props?.image ? (
    <Container
      position="relative"
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      maxH="32vh"
      overflow="hidden"
      rounded="xl"
      shadow="xl"
      p={0}
      my={24}
    >
      <AspectRatio ratio={3 / 1}>
        <Image
          src={String(props?.image?.src)}
          alt={
            props?.image.alt?.trim() +
            ' ' +
            String(props?.image?.attr ? props?.image.attr?.trim() : '')
          }
          fill={true}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: imagePosStyle.objectPosition,
            transform: imagePosStyle.transform,
          }}
        />
      </AspectRatio>
    </Container>
  ) : null;
};
