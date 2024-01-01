interface Props {
  children: React.ReactNode;
}

export function LargeText({ children }: Props) {
    return (
        <div className="text-lg lg:text-xl font-body font-medium">
        {children}
      </div>
    )
  }
  