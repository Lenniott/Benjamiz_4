import { FaQuoteLeft } from "react-icons/fa6"; 
import { FaQuoteRight } from "react-icons/fa6";
interface Props {
    quote: string;
    author: string;
    source: string;
}

export const Quote = ({quote,author,source}:Props)=>{
    return(
    <div className="flex flex-col gap-4 h-full pt-8">
        <div className='flex flex-col gap-2 px-6 sm:px-8 py-0 border-l-4 border-l-muted-foreground'>
            <FaQuoteLeft className="w-6 h-6 text-muted-foreground" />
            <i>{quote}</i>
            <div className="flex flex-col gap-1 flex-grow">
                <FaQuoteRight className="w-6 h-6 items-right text-muted-foreground" />                
            </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:gap-1 flex-grow items-end sm:justify-end  h-fit'>
            <p className='text-sm'>{author}</p>
            <p className='text-sm text-muted-foreground'>{source}</p>    
        </div>
    </div>
    )
}
