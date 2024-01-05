interface Props {
  children: React.ReactNode;
}

export function H3({ children }: Props) {
    return (
    <h3 className="scroll-m-20 font-sans-serif text-md font-normal tracking-tight lg:text-lg pt-3 pb-1">
        {children}
    </h3>
    )
  }
  