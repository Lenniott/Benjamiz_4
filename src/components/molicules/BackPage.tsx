
import { useNavigate } from 'react-router-dom';
import {ArrowLeft} from 'lucide-react'
import { H1 } from '../typography';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface PageComponentProps {
  title: string;
  backButton?:boolean;
  to?:string;
}

export function PageHeader ({ title,backButton,to }:PageComponentProps){
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

  };



  return (
    <div className={`flex flex-col items-start justify-top ${backButton?" h-16 ] my-4":"h-2  mb-4"} -translate-y-[20px] gap-2`}>
      {to ? (
        <Link to={to}>
          <H1 addSlash={true}>{title}</H1>
        </Link>
      ) : (
        <H1 addSlash={true}>{title}</H1>
      )}
      

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


