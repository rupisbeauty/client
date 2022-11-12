import React from 'react';

const colors = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'pink',
  'brown',
  'black',
  'gray',
];

export const ResDebugger = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const kids = React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        ...child.props,
        border: '5px solid',
        borderColor: {
          base: colors[4],
          sm: colors[3],
          md: colors[2],
          lg: colors[1],
          xl: colors[0],
        },
        // style: {
        //   border: '1px solid',
        //   borderColor: ,
        //   margin: 0.5,
        // },
      });
    }
  });
  return <>{kids}</>;
};
