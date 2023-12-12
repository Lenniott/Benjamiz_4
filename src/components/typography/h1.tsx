interface Props {
  children: React.ReactNode;
}

export function H1({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-heading font-medium tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
