interface ListTextProps {
  items: string[];
}

export function ListText({ items }: ListTextProps) {
  return (
    <ul className="my-6 ml-6 font-body font-light list-disc [&>li]:mt-2 text-sm lg:text-base">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
