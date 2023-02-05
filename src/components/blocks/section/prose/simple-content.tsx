import { Text } from '@chakra-ui/react';

import type { CategoriesBlocksContent, PagesBlocksContent } from '.tina';
import type { TextProps } from '@chakra-ui/react';

export const SimpleContent: React.FC<
  PagesBlocksContent | CategoriesBlocksContent
> = (props) => {
  const textStyles = props.typography as Partial<TextProps>;

  return props?.text ? (
    <Text textStyle="content.default" {...textStyles}>
      <>{props?.text}</>
    </Text>
  ) : null;
};
