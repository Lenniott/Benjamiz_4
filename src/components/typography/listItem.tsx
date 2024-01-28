import React from "react";

interface ListItemProps {
  children: React.ReactNode;
  isOrdered?: boolean;
  index?: number;
}

export function ListItem({ children, isOrdered, index }: ListItemProps) {
  const itemNumber = index && isOrdered ? 1 + index : 1;

  return (
    <li className={`flex flex-grow items-center ${isOrdered ? "list-disc" : "list-decimal"} `} aria-label={!isOrdered ? "Bullet Point" : `Item number ${itemNumber}`}>
      {children}
    </li>
  );
}
