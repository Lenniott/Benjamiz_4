import React from 'react';

import { useNavigate } from 'react-router-dom';
import {ArrowLeft} from 'lucide-react'
import { Button } from '../ui/button';


const GoBackHeader : React.FC<{}> = () =>{
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

  };
  return (
    <div className={` ml-9 flex flex-col items-start justify-top -translate-y-[20px] gap-1`}>

      <Button
        onClick={goBack}
        variant="secondary"
        className='group flex items-center gap-2 -translate-x-[20px] -translate-y-[10px] '
      >
        <ArrowLeft className='text-foreground w-4 h-4 group-hover:translate-x-[-10px] group-hover:text-background  transition-transform sm:w-6 sm:h-6'/>
        Go back
      </Button>
    </div>
  );
};



export {GoBackHeader}