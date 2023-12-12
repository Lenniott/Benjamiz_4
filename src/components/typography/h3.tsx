interface Props {
  children: React.ReactNode;
}

export function H3({ children }: Props) {
    return (
    <h3 className="scroll-m-20 text-2xl font-heading font-normal tracking-tight">
        {children}
    </h3>
    )
  }
  