interface Props {
  children: React.ReactNode;
}

export function MutedText({ children }: Props) {
    return (
        <p className="text-sm font-body font-light text-muted-foreground">
        {children}
      </p>
    )
  }
  