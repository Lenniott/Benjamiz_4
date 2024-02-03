import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface ContainerProps {
    header: string;
    link: string;
    slash?:boolean;
    image?:string;
    alt?:string;
    horizontal?:boolean;
    title:string
  }
  

  export function Container_NavToPage({
    link,
    image,
    alt,
    title,
    horizontal = true,
  }: ContainerProps) {
    const navigate = useNavigate();
    const orientation = horizontal ? "flex-row" : "flex-col";
  
    return (
      <div className={`flex ${orientation} items-start gap-8 flex-shrink-0`}>
        <div className="flex flex-col text-pretty justify-between flex-1 min-w-32 gap-4">
            {image && (
          <div className="flex flex-col items-center justify-center rounded-sm">
            <img className="hidden xxs:block rounded-sm  h-auto bg-light-gray bg-no-repeat bg-cover" src={image} alt={alt} />
          </div>
        )}
            <h3 className="font-light font-base sm:font-lg pb-4">{title}</h3>
              <div className="flex flex-grow justify-end">
              <Button variant='secondary' onClick={() => navigate(link)} className='group flex gap-1 items-center shadow-none w-fit justify-start'>
              Read
              <FaArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] group-hover:text-background transition-transform sm:w-6 sm:h-6'/>
            </Button>
              </div>

        </div>

      </div>
    );
  }