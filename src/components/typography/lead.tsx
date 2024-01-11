interface Props {
  children: React.ReactNode;
  className?: string;
}

export function LeadText({ children,className }: Props) {
    return (
    <p className={`${className} self-stretch items-start text-gl sm:text-xl font-san-serif text-foreground`}>
        {children}
    </p>
    )
  }
  