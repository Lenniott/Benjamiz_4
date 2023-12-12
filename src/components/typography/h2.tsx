interface Props {
  children: React.ReactNode;
}

export function H2({ children }: Props) {
    return (
      <h2 className="scroll-m-20 border-b pb-2 font-heading text-3xl font-normal tracking-tight first:mt-0 border-border">
        {children}
      </h2>
    )
  }
  