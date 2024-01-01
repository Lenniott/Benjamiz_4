interface Props {
  children: React.ReactNode;
}

export function LeadText({ children }: Props) {
    return (
    <p className="text-xl lg:text-2xl font-body text-muted-foreground">
        {children}
    </p>
    )
  }
  