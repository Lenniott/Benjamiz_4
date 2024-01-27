interface Props {
  children: React.ReactNode;
  className?: string;
}

export function MutedText({ children,className }: Props) {
    return (
        <p className={`${className}}text-sm lg:text-base  font-san  font-light text-muted-foreground`}>
        {children}
      </p>
    )
  }
  