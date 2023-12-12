interface Props {
  children: React.ReactNode;
  link: string;
}

export function Link({ link,children }: Props) {
  return (
    <a href={link} className="text-accent underline underline-offset-1 hover:underline-offset-4">
      {children}
    </a>
  );
}
