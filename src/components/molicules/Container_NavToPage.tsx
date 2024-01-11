
import { H3, H4 } from "../typography";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface ContainerProps {
    header: string;
    link: string;
    slash?:boolean;
    image?:string;
    alt?:string;
    horizontal?:boolean;
  }
  

export function Container_NavToPage({
    link,
    header,
    slash = true,
    image,
    alt,
    horizontal = true,
    }:ContainerProps){
        const navigate = useNavigate();
        const orination = horizontal? "flex-row":"flex-col";
      return (

        <div className={`flex ${orination} items-start gap-4 flex-1`}>
        <div className="flex flex-col items-start justify-start gap-4 flex-1">


        <H3 addSlash={slash}>Article</H3>
        <H4>{header}</H4>
        <Button variant='link' onClick={() => navigate(link)} className='pl-0 group flex  gap-1 items-center  shadow-none h-auto justify-start '>
        Read more
        <ArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
        </Button>
        </div>

        
       
        {image? <div className="flex flex-col my-auto items-center justify-center rounded-sm "><img className=" rounded-sm  w-[128px] h-[128px] bg-light-gray bg-no-repeat bg-cover" src={image} alt={alt} /></div>:''}
        </div>
      
      )
    }
  