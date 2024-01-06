//./src/components/typography/list.tsx

import React from "react";

interface ListTextProps {
  children: React.ReactNode;
  isOrdered?: boolean;
}

const OrderedList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ol className="list-decimal my-6 ml-6 text-sm sm:text-base font-light">
      {children}
    </ol>
  );
};

const UnorderList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ul className="my-6 ml-6 text-sm sm:text-base font-light">
      {children}
    </ul>
  );
};

export function ListText({ children, isOrdered}: ListTextProps) {
  return (
    <>
      {isOrdered ? <OrderedList>{children}</OrderedList> : <UnorderList>{children}</UnorderList>}
    </>
  );
}
