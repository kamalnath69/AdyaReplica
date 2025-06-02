import { type TargetAndTransition, type Transition } from "framer-motion";

export const transitionConfig: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export const navbarItemHover: TargetAndTransition = {
  scale: 1.05,
  opacity: 0.9,
  transition: {
    duration: 0.2,
  },
};

export const heroTextReveal: TargetAndTransition = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.8,
    ease: [0.33, 1, 0.68, 1],
  },
};

export const fadeIn: TargetAndTransition = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
  },
};

export const cardHover: TargetAndTransition = {
  y: -8,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.2,
  },
};