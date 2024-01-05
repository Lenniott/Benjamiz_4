import { Circle } from "lucide-react";
import React from "react";

interface ListItemProps {
  children: React.ReactNode;
  isOrdered?: boolean; // Add this prop
  index?: number;
}

export function ListItem({ children, isOrdered, index }: ListItemProps) {
  const itemNumber = index && isOrdered ? 1+index: 1;
  return (
    <li className={`flex items-center mt-2`}>
      {!isOrdered?<Circle className="mr-4 h-4 w-4 text-accent" />:<span className="w-8 font-serif text-accent">{itemNumber+"."}</span>}
      {children}
    </li>
  );
}
