
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <Link to="/" aria-label="Benjamiz logo, back to home" className="flex flex-col items-center justify-center w-12 h-12 rounded-md text-foreground bg-card"> 
            <p aria-hidden="true" className='text-xs'>Benja</p>
            <p aria-hidden="true" className='text-xs'>miz</p>
        </Link>
    );
}
