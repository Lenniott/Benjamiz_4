import { FaQuoteLeft } from "react-icons/fa6"; 
import { FaQuoteRight } from "react-icons/fa6";
interface Props {
    quote: string;
    author: string;
    source: string;
}

export const Quote = ({quote,author,source}:Props)=>{
    return(
    <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-2 px-8 py-0 border-l-4 border-l-muted-foreground'>
            <FaQuoteLeft className="w-6 h-6" />
            <i>{quote}</i>
            <div className="flex flex-col gap-1 flex-grow">
                <FaQuoteRight className="w-6 h-6 items-right" />                
            </div>

        </div>
        <div className='flex flex-col gap-1 flex-grow items-end'>
            <p className='flex flex-grow gap-1 text-sm'>{author}</p>
            <p className='flex flex-grow gap-1 text-sm text-muted-foreground'>{source}</p>
        </div>
    </div>
    )
}
