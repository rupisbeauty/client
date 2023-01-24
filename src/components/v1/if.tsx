import type { FC } from 'react';

export const If: FC<{
  condition: boolean;
  children: React.ReactNode;
  fallback?: JSX.Element;
}> = ({ condition, children, fallback }) => {
  const Else = fallback;
  return condition ? <>{children}</> : fallback ? <>{Else}</> : null;
};
