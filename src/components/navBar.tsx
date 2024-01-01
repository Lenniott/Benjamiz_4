import {  navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "./ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "../components/mode-toggle"
import {Menu} from "lucide-react"
import {Logo} from "../assets/images/logo"

export function NavBar() {
    const MobileMenu = ()=>{
        return(
        <Sheet aria-label="navigation menu">
        <SheetTrigger className="flex sm:hidden">
            <Button variant={"secondary"} size={"icon"} className={"w-10 h-10 p-0"}>
                <Menu/>
            </Button>

        </SheetTrigger>
        <SheetContent>

        </SheetContent>
    </Sheet>
        )
    }

    const DesktopMenu = ()=>{
        return(
        <NavigationMenu aria-label="navigation menu" className="hidden sm:block">
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link to="/experience">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link to="/works">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Works</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link to="/designSystem">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Design System
            </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <ModeToggle/>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
        )
    }

    return (
        <>
        <div className="fixed top-0 z-50 py-2 px-4 max-w-3xl mx-auto w-screen flex items-center bg-background" >
        <div className="flex flex-grow">
            <Logo/>
        </div>

        <DesktopMenu/>
        <MobileMenu/>
        </div>

        </>

    )
}