import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';
import { createRef } from 'react';
import { MotionBox } from './motion';

const ref = createRef<HTMLDivElement>();

export const HorizontalParallax = ({
  speed = 1 / 2,
  children,
  ...props
}: {
  speed?: number;
  children: ReactNode;
}) => {
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll({
    container: ref,
  });

  // const y = useTransform(scrollY, (value) => -value * speed);
  const x = useTransform(scrollY, (value) => (value * speed) / 2);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <MotionBox style={{ x }} ref={ref} {...props}>
      {children}
    </MotionBox>
  );
};
