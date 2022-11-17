import React from 'react';

export const If = ({
  condition,
  children,
  fallback,
}: {
  condition: boolean;
  children: React.ReactNode;
  fallback?: JSX.Element;
}) => {
  const Else = fallback;
  return condition ? <>{children}</> : fallback ? <>{Else}</> : null;
};
