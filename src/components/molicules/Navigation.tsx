import {  navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaHouse, FaBookBookmark,FaUser,FaBriefcase } from "react-icons/fa6";

interface props{
    position?:string
}
export const Navigation = ({position="top"}:props)=>{
    return(
    <NavigationMenu aria-label="navigation menu" className={`${position==="top"?"hidden sm:flex":"flex w-full sm:hidden"}`}>
    <NavigationMenuList className="gap-2 grid grid-cols-4 sm:flex">

        <NavigationMenuItem >
            <Link to="/">

            <NavigationMenuLink className={navigationMenuTriggerStyle()+" flex items-center gap-2"}>                
            <FaHouse/> 
            <p className="hidden sm:block text-white">Home</p>
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/works">
            <NavigationMenuLink className={navigationMenuTriggerStyle()+" flex items-center gap-2"}>
            <FaBookBookmark/>
            <p className="hidden sm:block text-white">Works</p>
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()+" flex items-center gap-2"}>
            <FaUser/>
            <p className="hidden sm:block text-white">About</p>
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link to="/experience">
            <NavigationMenuLink className={navigationMenuTriggerStyle()+" flex items-center gap-2"}>
            <FaBriefcase/>
            <p className="hidden sm:block text-white">Experience</p>
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    </NavigationMenuList>
</NavigationMenu>
    )
}
