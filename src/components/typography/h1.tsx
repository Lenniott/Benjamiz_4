interface Props {
  children: React.ReactNode;
  color?: string;
  addSlash?: boolean;
}

export function H1({ children,color,addSlash }: Props) {
  return (
    <div className="flex scroll-m-20 leading-10 tracking-wide text-2xl font-serif font-medium sm:text-3xl my-2">
        {addSlash? <span>{"/"}</span> : ''}
    <h1 className={`scroll-m-20 leading-10 tracking-wide text-2xl font-serif text-${color? color : 'accent'} font-medium sm:text-3xl`}>
      {children}
    </h1>
    </div>

  );
}
