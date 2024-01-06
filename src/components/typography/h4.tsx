interface Props {
  children: React.ReactNode;
}

export function H4({ children }: Props) {
    return (
        <h4 className="scroll-m-20 text-sm font-sans-serif font-light tracking-tight sm:text-base">
            {children}
        </h4>
    )
  }
  