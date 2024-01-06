interface Props {
  children: React.ReactNode;
}

export function LeadText({ children }: Props) {
    return (
    <p className="text-gl sm:text-xl font-san-serif text-foreground">
        {children}
    </p>
    )
  }
  