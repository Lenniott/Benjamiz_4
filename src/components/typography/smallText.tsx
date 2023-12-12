interface Props {
  children: React.ReactNode;
}

export function SmallText({ children }: Props) {
    return (
        <small className="text-sm font-body font-normal leading-none">
        {children}
      </small>
    )
  }
  