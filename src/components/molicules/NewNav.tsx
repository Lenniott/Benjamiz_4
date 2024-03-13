
import { FaHouse,FaUser,FaBriefcase,FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "../logo";

export const NewNav = () => {
    // Function to scroll to the bottom of the page
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <nav className={` flex flex-row items-center w-screen sm:gap-2 justify-between sm:justify-normal px-4 sm:px-0 fixed h-16 bottom-0 z-50 sm:top-0 max-w-3xl backdrop-blur-sm bg-white/50 dark:bg-[#080a0c]/50`}>
            <Link className="hidden sm:flex sm:mr-auto" to="/" aria-label='Home'>
                <Logo/>
            </Link>
            <Link to="/">
                <Button variant="ghost" size="lg" className='flex items-center gap-2' aria-label='Home'>
                        <FaHouse/>
                        <span className="hidden sm:block">Home</span>
                    </Button>
            </Link>
            {/* <Link to="/works">
                <Button variant="ghost" size="lg" className='flex items-center gap-2' aria-label='Works'>
                        <FaBriefcase/>
                        <span className="hidden sm:block">Works</span>
                    </Button>
            </Link> */}
            <Link to="/about">
                <Button variant="ghost"  size="lg" className='flex items-center gap-2' aria-label='About'>
                    <FaUser/>
                    <span className="hidden sm:block">About</span>
                    </Button>
            </Link>
            <Button variant="default"  size="lg" className='flex items-center gap-2' onClick={scrollToBottom} aria-label='Contact'>
                <FaPaperPlane/>
                <span className="hidden sm:block">Contact</span>
            </Button>
            <div className="">
            <ModeToggle/>
            </div>
            
        </nav>
    );
};
