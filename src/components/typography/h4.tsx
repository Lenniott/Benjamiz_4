interface Props {
  children: React.ReactNode;
}

export function H4({ children }: Props) {
    return (
        <h4 className="text-md font-sans-serif font-regular tracking-tight sm:text-lg">
            {children}
        </h4>
    )
  }
  