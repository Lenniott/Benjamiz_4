interface Props {
  children: React.ReactNode;
}

export function MutedText({ children }: Props) {
    return (
        <p className="text-sm lg:text-base font-body   font-san-serif  font-light text-muted-foreground">
        {children}
      </p>
    )
  }
  