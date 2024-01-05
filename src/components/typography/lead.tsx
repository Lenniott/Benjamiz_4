interface Props {
  children: React.ReactNode;
}

export function LeadText({ children }: Props) {
    return (
    <p className="text-xl lg:text-2xl font-san-serif text-muted-foreground">
        {children}
    </p>
    )
  }
  