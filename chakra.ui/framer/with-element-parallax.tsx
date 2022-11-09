/* eslint-disable */
import { useScroll, useTransform } from 'framer-motion';
import type { ComponentType, FC, ReactNode } from 'react';
import { createRef } from 'react';

// create a ref so we can attach it to the scroll container
const ref = createRef<HTMLDivElement>();

// apply this to the element being scrolled
export function withScrollRef(Component: FC): ComponentType | null {
  return (props: any) => {
    return <Component {...props} ref={ref} />;
  };
}

// apply this to the element with the scroll effect
export function withElementParallax(Component: FC): ComponentType {
  const speed = 1 / 2;
  return (props: any) => {
    const { scrollY } = useScroll({
      container: ref,
    });
    const x = useTransform(scrollY, (value) => -value * speed); // scrolling down translates left
    return <Component {...props} style={{ ...props.style, x: x }} />;
  };
}
