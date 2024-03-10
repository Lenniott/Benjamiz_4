import { useNavigate } from 'react-router-dom';

interface Card {
  children?: React.ReactNode;
    type?: string;
    link: string;
    slash?:boolean;
    image?:string;
    alt?:string;
    title:string
  }
  

  export function Card({
    link,
    image,
    alt,
    title,
    type
  }: Card) {
    const navigate = useNavigate();
  
    return (
      <div
      className="max-w-xs rounded-md overflow-hidden border border-accent hover:border-transparent cursor-pointer group"
      aria-label={alt}
      onClick={() => navigate(link)}
      >
          <div   
          className="flex flex-col min-w-32 text-pretty h-96 justify-end bg-cover bg-no-repeat relative" 
          style={{ backgroundImage: `url(${image})` }}>
              <div className="flex flex-col items-left bg-gradient-to-t group-hover:from-[#080357] group-hover:dark:from-[#ffe66d] from-white dark:from-black from-30% to-transparent items-start h-64 justify-end p-4 space-y-2 group-hover:text-accent-foreground text-accent">              
              <div className='absolute top-4 left-4 text-sm dark:text-accent dark:bg-accent-foreground text-accent-foreground bg-accent rounded-full px-3'>{type}</div>
              <h3 className="font-medium text-md sm:text-lg">{title}</h3>

              </div>
              
          </div>

      </div>

    );
  }

