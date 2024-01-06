import { motion } from "framer-motion";
import React from "react";

interface ContainerProps {
  containerPosition: number;
  children: React.ReactNode;
  containerClassName?: string;
  direction?: 'x' | 'y'; // Specify the type for direction
}

export function Container({ children, containerPosition, containerClassName, direction = 'x' }: ContainerProps) {
  const defaultClassName = 'flex flex-col sm:flex-row gap-4 sm:gap-8 border border-card-border rounded-md p-2 sm:p-4 bg-card';
  const className = containerClassName || defaultClassName;

  // Determine the animation direction based on the container position
  const animateInDirection = containerPosition % 2 === 0 ? -200 : 200;

  return (
    <motion.div 
      className={className}
      initial={{ [direction]: animateInDirection, opacity: 0 }} // Use bracket notation
      animate={{ [direction]: 0, opacity: 1 }} // Use bracket notation
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
