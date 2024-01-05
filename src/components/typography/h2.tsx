interface Props {
  children: React.ReactNode;
}

export function H2({ children }: Props) {
    return (
      <h2 className="scroll-m-20 font-sans-serif text-xl font-normal text-foreground tracking-tight first:mt-0 sm:text-2xl">
        {children}
      </h2>
    )
  }
  