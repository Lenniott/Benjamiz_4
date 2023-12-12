interface Props {
  children: React.ReactNode;
}

export function LargeText({ children }: Props) {
    return (
        <div className="text-lg font-body font-medium">
        {children}
      </div>
    )
  }
  