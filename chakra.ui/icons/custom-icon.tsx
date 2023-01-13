import { Box } from '@chakra-ui/react';
import { paths } from './paths';

import type { BoxProps, ChakraProps } from '@chakra-ui/react';
import type { FC } from 'react';

type CustomIconProps = {
  icon: string;
  size: string | number | string[] | number[];
  color?: string;
  stroke?: string;
} & BoxProps;

export const CustomIcon: FC<CustomIconProps> = ({
  icon = 'add',
  size = '1.25rem',
  color,
  stroke,
  ...rest
}) => {
  const Icon: FC<CustomIconProps & ChakraProps> = ({
    color,
    size,
    icon,
    stroke,
    ...rest
  }) => {
    return (
      <Box
        as="svg"
        viewBox={paths[icon]?.viewBox}
        width={size}
        height={size}
        fill={color}
        stroke={stroke}
        {...rest}
      >
        {paths[icon]?.d.map((d: string, i: number) => (
          <path key={i} d={d} transform={paths[icon]?.transform} />
        ))}
      </Box>
    );
  };

  return (
    <Icon color={color} size={size} icon={icon} stroke={stroke} {...rest} />
  );
};
