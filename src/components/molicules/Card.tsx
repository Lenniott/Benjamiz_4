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
      className="max-w-xs rounded-md overflow-hidden shadow-md shadow-accent cursor-pointer hover:bg-accent hover:shadow-none hover:text-accent-foreground group"
      onClick={() => navigate(link)}
      >
          <div className="flex flex-col text-pretty justify-between flex-1 min-w-32">
              {image && (
                <div className="flex flex-col items-center justify-center rounded-sm">
                  <img className="hidden xxs:block rounded-t-sm  h-auto bg-light-gray bg-no-repeat bg-cover" src={image} alt={alt} />
                </div>
              )}
              <div className="flex flex-col gap-4 p-4">
              <h3 className="font-medium font-base sm:font-lg">{title}</h3>
              <div className='text-sm text-muted-foreground group-hover:text-muted'>{type}</div>
              </div>
          </div>

      </div>

    );
  }

