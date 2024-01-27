
import { SlashHeader } from "../typography/SlashHeader";
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
    title:string
  }
  

export function Container_NavToPage({
    link,
    header,
    image,
    alt,
    title,
    horizontal = true,
    }:ContainerProps){
        const navigate = useNavigate();
        const orination = horizontal? "flex-row":"flex-col";
      return (

        <div className={`flex ${orination} items-start gap-8`}>
          <div className=" text-pretty flex flex-col items-start justify-start flex-1 min-w-32 gap-4">
          <SlashHeader to={`/${header}`} className="h4 font-serif">
            <h2 className="text-accent">{header}</h2>
          </SlashHeader>
          <h3 className="font-light">{title}</h3>
          <Button variant='link' onClick={() => navigate(link)} className='pl-0 group flex  gap-1 items-center  shadow-none h-auto justify-start '>
          Read more
          <ArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
          </Button>
          </div>
          {image? <div className="flex flex-col my-auto items-center justify-center rounded-sm"><img className="hidden xxs:block rounded-sm xxs:w-32 h-auto bg-light-gray bg-no-repeat bg-cover" src={image} alt={alt} /></div>:''}
        </div>
      
      )
    }
  