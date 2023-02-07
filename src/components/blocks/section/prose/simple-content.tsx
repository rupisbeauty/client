import type { CategoriesBlocksContent, PagesBlocksContent } from '.tina';
import type {
  BoxProps,
  ChakraProps,
  HeadingProps,
  TextProps,
} from '@chakra-ui/react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

export const SimpleContent: React.FC<
  PagesBlocksContent | CategoriesBlocksContent
> = (props) => {
  return props?.text ? (
    <Box
      as={Stack}
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      px={[4, 8, 12, 16, 24]}
      py={[4, 8, 12, 16]}
      mx="auto"
      display="flex"
      flexDirection="column"
      {...props?.spacing?.flex}
      bg={props.backgroundColor as ChakraProps['bg']}
      my={props.spacing?.my as ChakraProps['my']}
      {...(props?.decorative as BoxProps)}
    >
      {props?.heading ? (
        <Heading
          textStyle="content.heading"
          color={props?.headingSettings?.color as ChakraProps['color']}
          {...(props?.headingSettings?.typography as HeadingProps)}
        >
          {props.heading}
        </Heading>
      ) : null}
      {props?.text ? (
        <Text
          textStyle="content.default"
          color={props?.textSettings?.color as ChakraProps['color']}
          {...(props?.textSettings?.typography as TextProps)}
          whiteSpace="pre-wrap"
        >
          {props?.text}
        </Text>
      ) : null}
    </Box>
  ) : null;
};
