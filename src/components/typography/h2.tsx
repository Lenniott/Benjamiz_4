interface Props {
  children: React.ReactNode;
}

export function H2({ children }: Props) {
    return (
      <h2 className="scroll-m-20 font-heading text-lg font-light text-muted-foreground tracking-tight first:mt-0 sm:text-xl">
        {children}
      </h2>
    )
  }
  