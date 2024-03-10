
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
        <nav className={`fixed h-16 bottom-0 z-50 sm:top-0 py-2 px-8 max-w-3xl mx-auto w-screen flex items-center backdrop-blur-sm bg-white/50 dark:bg-[#080a0c]/50 gap-2`}>
            <div className="hidden sm:flex">
                <Link to="/" aria-label='Home'>
                    <Logo/>
                </Link>
            </div>
            <div className="flex flex-row flex-grow items-center gap-4 justify-between sm:justify-end">
            <Link to="/">
                    <Button variant="ghost" size="lg" className='flex items-center gap-2' aria-label='Home'>
                            <FaHouse/>
                            <span className="hidden sm:block">Home</span>
                        </Button>
                </Link>
                <Link to="/works">
                    <Button variant="ghost" size="lg" className='flex items-center gap-2' aria-label='Works'>
                            <FaBriefcase/>
                            <span className="hidden sm:block">Works</span>
                        </Button>
                </Link>
                <Link to="/about">
                    <Button variant="ghost"  size="lg" className='flex items-center gap-2' aria-label='About'>
                        <FaUser/>
                        <span className="hidden sm:block">About</span>
                        </Button>
                </Link>
                {/* Updated Button for Contact - Removed Link since it's not navigating */}
                <Button variant="default"  size="lg" className='flex items-center gap-2' onClick={scrollToBottom} aria-label='Contact'>
                    <FaPaperPlane/>
                    <span className="hidden sm:block">Contact</span>
                    </Button>
                <ModeToggle/>
            </div>
        </nav>
    );
};
