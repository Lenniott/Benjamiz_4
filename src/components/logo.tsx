
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <Link to="/" aria-label="Benjamiz logo, back to home" className="flex flex-row items-center justify-center text-sm font-serif font-medium"> 
            <span className='text-forground' >Benja</span><span className='flex items-center justify-center w-8 h-8 rounded-md text-accent-foreground bg-accent'>miz</span>
        </Link>
    );
}
