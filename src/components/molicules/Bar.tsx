import { Logo } from "../logo";
import { Navigation } from "./Navigation";
import { ModeToggle } from "./mode-toggle";

interface Props {
    position?: "top"|"bottom";
}

export function Bar({position="top"}: Props) {
    const positionClass = position === "top" ? "top-0" : "-bottom-0.5 sm:hidden ";
//fixed top-0 z-50 py-2 px-4 max-w-3xl mx-auto w-screen flex items-center bg-gradient-to-b from-background to-transparent
    return (
        <div className={`fixed ${positionClass} h-16 z-50 py-2 px-8 max-w-3xl mx-auto w-screen flex items-center justify-center backdrop-blur-sm bg-white/50 dark:bg-[#080a0c]/50 gap-2`} >
            {position === "top" && 
                <div className="flex flex-grow">
                    <Logo/>
                </div>
            }

            <Navigation position={position}/>
            {position === "top" && 
                <ModeToggle/>
            }
        </div>
    )
}