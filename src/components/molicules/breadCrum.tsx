import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


interface PageComponentProps {
  label: string;
  to:string;
  className?: string;
}

const BreadCrum : React.FC<PageComponentProps> = ({to,label,className }:PageComponentProps) =>{
  return (
      <RouterLink to={to} className={`flex gap-1 text-accent font-sans text-sm lg:text-base  group ${className}`}>
      <span className="transition group-hover:-translate-x-2 text-foreground">/</span>
      <label className='underline underline-offset-1 group-hover:underline-offset-4'>{label}</label>
      </RouterLink>

  );
};




export {BreadCrum}