// @link: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { MotionBox } from './motion';

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

export const FramerParallax = ({
  children,
  offset = 50,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight;
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset;

  // const y = useTransform(scrollY, [initial, final], [offset, -offset]);
  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <MotionBox ref={ref} style={{ y }}>
      {children}
    </MotionBox>
  );
};

// type ParallaxProps = {
//   children: ReactNode;
// };

// export const Parallax = ({ children }: ParallaxProps): JSX.Element => {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [100, 200], [0, 500]);
//   const { width: clientWidth, height: clientHeight } = useWindowSize();
//   return (
//     <>
//       <p>{`The element width is ${clientWidth}px and height ${clientHeight}px`}</p>
//       <MotionBox style={{ y }}>{children}</MotionBox>
//     </>
//   );
// };

// export const ParallaxElement = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(true);
//   const [motionRef, { width: elWidth, height: elHeight }] = useElementSize();

//   const toggleVisibility = () => setIsVisible((x) => !x);

//   return (
//     <>
//       <p>{`The element width is ${elWidth}px and height ${elHeight}px`}</p>
//       <p>Try, resize your window and-or click on the button.</p>
//       <Button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} square
//       </Button>

//       {isVisible && (
//         <chakra.div
//           ref={motionRef}
//           style={{
//             width: '50%',
//             paddingTop: '50%',
//             backgroundColor: 'aquamarine',
//             margin: 'auto',
//           }}
//         />
//       )}
//     </>
//   );
// };
