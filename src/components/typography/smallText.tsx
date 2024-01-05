interface Props {
  children: React.ReactNode;
}

export function SmallText({ children }: Props) {
    return (
        <small className="text-xs lg:text-sm   font-san-serif  font-body font-normal leading-none">
        {children}
      </small>
    )
  }
  