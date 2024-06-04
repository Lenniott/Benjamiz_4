
                        
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Container } from "../container"
import { Link } from "react-router-dom"
import { FaMedium, FaTwitter, FaGithub, FaLinkedin, FaBriefcase} from "react-icons/fa6"

interface BlockProps {
    icon: "medium" | "twitter" | "github" | "linkedin"|"briefcase";
    delay?: number
  }
  

export const Block=(({icon, delay = 0}:BlockProps) => {
    const imageStyle ='size-4 sm:size-6';
    const icons = {
        medium: {
            icon:<FaMedium className={imageStyle}/>,
            link: "https://medium.com/@benjamin.mizrany/",
            label: "medium",
        },
        twitter: {
            icon: <FaTwitter className={imageStyle}/>,
            link: "https://twitter.com/benja_miz",
            label: "twitter",
        },
        github:{
            icon: <FaGithub className={imageStyle}/>,
            link: "https://github.com/Lenniott",
            label: "github",
        },
        linkedin:{
            icon: <FaLinkedin className={imageStyle}/>,
            link: "https://www.linkedin.com/in/mizranyb/",
            label: "linkedin",
        },
        briefcase:{
            icon: <FaBriefcase className={imageStyle}/>,
            link: "https://drive.google.com/file/d/1dHWbjaFwjcClaS7i-VMkOUrvfLuXKy1q/view?usp=sharing", 
            label: "pdf CV",
        }
    }
    return (
        <Link to={icons[icon].link}>
        <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className='w-fit'>
                        <Container  delay={delay} variant='clear' className='p-0 grid w-fit text-sm group text-accent hover:bg-accent hover:text-accent-foreground ease-in delay-150 transition-all'>
                            {icons[icon].icon}
                        </Container>
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className="text-sm">
                        <p aria-label={icons[icon].label}>{icons[icon].label}</p>
                    </TooltipContent>
                </Tooltip>
        </TooltipProvider>
        </Link>
    )}

)