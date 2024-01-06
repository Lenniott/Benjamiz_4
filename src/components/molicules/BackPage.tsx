import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ArrowLeft} from 'lucide-react'
import { H1 } from '../typography';
import { Button } from '../ui/button';

interface PageComponentProps {
  title: string;
  backButton?:boolean;
}

export function PageHeader ({ title,backButton }:PageComponentProps){
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

  };



  return (
    <div className="flex flex-col items-start justify-top h-16 -translate-y-[20px] ">
      <H1 addSlash={true}>{title}</H1>

      {backButton &&
      <Button
        onClick={goBack}
        variant="link"
        className='group flex items-center gap-2 -translate-x-[20px] -translate-y-[10px] '
      >
        <ArrowLeft className='text-foreground w-4 h-4 group-hover:translate-x-[-10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
        Go back
      </Button>
      }
    </div>
  );
};


