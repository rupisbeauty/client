import { Badge, Stack } from '@chakra-ui/react';

import type { CategoriesBlocksServiceMenu } from '.tina';

export const ServiceBadges: React.FC<{
  data: CategoriesBlocksServiceMenu | null | undefined;
  hasOptions: boolean;
  hasServices: boolean;
}> = ({ data, hasOptions, hasServices }) => {
  const badgeStyles = {
    my: 1,
    variant: 'outline',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxW: ['auto', null, '160px'],
    noOfLines: 1,
  };

  // Only render either options or service badges never both.
  return (
    <Stack
      h="full"
      px={3}
      direction={'row'}
      align={'center'}
      justify="flex-start"
      maxW="240px"
    >
      {hasOptions
        ? data?.options?.slice(0, 2).map((option) => {
            return (
              <Badge
                key={option?.option?.id}
                {...badgeStyles}
                colorScheme="teal"
                whiteSpace={['nowrap']}
              >
                {option?.option?.title}
              </Badge>
            );
          })
        : null}
      {!hasOptions && hasServices
        ? data?.relatedServices?.slice(0, 2).map((service) => {
            return (
              <Badge
                key={service?.service?.id}
                {...badgeStyles}
                whiteSpace={['nowrap']}
              >
                {service?.service?.title}
              </Badge>
            );
          })
        : null}
      <Badge my={1} variant="outline" colorScheme="yellow">
        {'+ More'}
      </Badge>
    </Stack>
  );
};
