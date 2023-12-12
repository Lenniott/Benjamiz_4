interface Props {
  children: React.ReactNode;
}

export function H4({ children }: Props) {
    return (
        <h4 className="scroll-m-20 text-xl font-heading font-normal tracking-tight">
            {children}
        </h4>
    )
  }
  