interface Props {
  children: React.ReactNode;
}

export function LeadText({ children }: Props) {
    return (
    <p className="text-xl font-body text-muted-foreground">
        {children}
    </p>
    )
  }
  