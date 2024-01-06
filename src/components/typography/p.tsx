interface ParagraphProps {
  children: React.ReactNode;
  inline?: boolean; // Add a prop to indicate inline rendering
}

export function Paragraph({ children, inline }: ParagraphProps) {
  const Tag = inline ? 'span' : 'p'; // Choose the tag based on the 'inline' prop
  return (
    <Tag className={`leading-7 py-1 sm:py-2 text-sm sm:text-base font-body  font-san-serif  font-light ${!inline && '[&:not(:first-child)]:mt-6'}`}>
      {children}
    </Tag>
  );
}
