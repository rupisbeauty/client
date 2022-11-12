import React from 'react';

const colors = [
  'red',
  'blue',
  'green',
  'brown',
  'purple',
  'pink',
  'orange',
  'black',
  'gray',
];

export const Debugger = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const kids = React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        ...child.props,
        style: {
          border: '1px solid',
          borderColor: colors[Math.floor(Math.random() * colors.length)],
          margin: 0.5,
        },
      });
    }
  });
  return <>{kids}</>;
};
