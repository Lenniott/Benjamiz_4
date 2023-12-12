interface Props {
  children: React.ReactNode;
}

export function Paragraph({ children }: Props) {
    return (
        <p className="leading-7 font-body font-light [&:not(:first-child)]:mt-6">
        {children}
      </p>
    )
  }
  