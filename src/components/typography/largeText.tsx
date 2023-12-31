interface Props {
  children: React.ReactNode;
}

export function LargeText({ children }: Props) {
    return (
        <div className="text-lg sm:text-xl font-serif font-body font-medium">
        {children}
      </div>
    )
  }
  