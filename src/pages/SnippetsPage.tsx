import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function SnippetsPage() {
    return (
        <div className='grid grid-cols-1 gap-4 mt-4'>
            
            <Link to="/snippets/timeline">
                <Button variant={'link'}>
                    Timeline
                </Button>
            </Link>
            <Link to="/snippets/slider">
                <Button variant={'link'}>
                    Slider
                </Button>
            </Link>
            <Link to="/snippets/body-selector">
                <Button variant={'link'}>
                    Body Selector
                </Button>
            </Link>
            <Link to="/snippets/matrix">
                <Button variant={'link'}>
                    Radio to Matrix
                </Button>
            </Link>
        </div>
    );
};
