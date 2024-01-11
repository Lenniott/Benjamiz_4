import { motion } from "framer-motion";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  animateFromEnd?: boolean;
  variant?: 'linear' | 'solid' | 'clear';
  horizontal?: boolean
}

export function Container({ 
  children, 
  className = '', // Provide a default value
  animateFromEnd = true, 
  variant = 'solid',
  horizontal = true
}: ContainerProps) {


  const isHorizontal: string = horizontal ? 'flex-col xs:flex-row' : 'flex-row';
  // Define variants inside the function to access `col`
  const variants = {
    global: `flex ${isHorizontal} p-8 gap-8 items-right justify-start `, // Use template literal for dynamic col value
    solid: "rounded-lg bg-card p-8",
    linear: "rounded-lg bg-gradient-to-r from-card from-40% to-transparent to-80% p-8",
    clear: "",
  };

  const newClassName = `${variants[variant]} ${variants.global} ${className}`.trim();

  const direction = animateFromEnd ? -200 : 200;

  return (
    <motion.div 
      className={newClassName}
      initial={{ x: direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


export function ContainerGrid({
children,
}:ContainerProps){
  return (
    <div className="flex flex-col items-start gap-8 flex-grow">
      {children}
    </div>
  )
}

export function ContainerGridColumn({
  children,
  }:ContainerProps){
    return (
      <div className="flex flex-col items-start gap-4 flex-1">
        {children}
      </div>
    )
  }




