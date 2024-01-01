interface Props {
  children: React.ReactNode;
}

export function H1({ children }: Props) {
  return (
    <h1 className='scroll-m-20 leading-10 tracking-wide text-2xl font-heading font-reglular sm:text-3xl'>
      {children}
    </h1>
  );
}
