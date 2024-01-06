

  interface Props {
    children: React.ReactNode;
    color?: string;
    addSlash?: boolean;
    alignMobile?: string;
    alignDesktop?: string;
  }
  
  export function H3({ children,color,addSlash, alignDesktop,alignMobile }: Props) {
    return (
      <div className="flex scroll-m-20 leading-10 tracking-wide text-md font-serif font-medium sm:text-lg my-2 items-baseline">
          {addSlash? <span>{"/"}</span> : ''}
      <h3 className={`scroll-m-20 leading-10 tracking-wide text-md text-${alignMobile? alignMobile : 'left'} sm:text-${alignDesktop? alignDesktop : 'left'} font-serif text-${color? color : 'accent'} font-medium sm:text-lg`}>
        {children}
      </h3>
      </div>
  
    );
  }
  