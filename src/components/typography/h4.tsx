interface Props {
  children: React.ReactNode;
}

export function H4({ children }: Props) {
    return (
        <h4 className="scroll-m-20 text-lg font-heading font-normal tracking-tight lg:text-xl">
            {children}
        </h4>
    )
  }
  