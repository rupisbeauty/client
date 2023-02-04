import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  chakra,
  Container,
  Flex,
  Heading,
  Square,
  Text,
} from '@chakra-ui/react';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';

import type {
  AspectRatioProps,
  BoxProps,
  CardBodyProps,
  CardProps,
  ContainerProps,
  FlexProps,
  HeadingProps,
  SquareProps,
  TextProps,
} from '@chakra-ui/react';

export const MotionContainer = motion<ContainerProps>(Container);
export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionSquare = motion<SquareProps>(Square);
export const MotionRatio = motion<AspectRatioProps>(AspectRatio);
export const MotionCardBody = motion<CardBodyProps>(CardBody);
export const MotionCard = motion<CardProps>(Card);
export const MotionText = motion<TextProps>(Text);
export const MotionHeading = motion<HeadingProps>(Heading);

export const ChAnimateSharedLayout = chakra(AnimateSharedLayout);
export const ChLayoutGroup = chakra(LayoutGroup);
