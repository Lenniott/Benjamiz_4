  interface Props {
    children: React.ReactNode;
    color?: string;
    addSlash?: boolean;
    alignMobile?: string;
    alignDesktop?: string;
    className?: string;
  }
  
  export function H2({ className='',children,color,addSlash, alignDesktop,alignMobile }: Props) {
    return (
      <div className={`${className} flex text-2xl font-serif font-medium sm:text-3xl mb-4`}>
          {addSlash? <span>{"/"}</span> : ''}
      <h2 className={` text-${alignMobile? alignMobile : 'left'} sm:text-${alignDesktop? alignDesktop : 'left'} text-${color? color : 'accent'}`}>
        {children}
      </h2>
      </div>
  
    );
  }
  