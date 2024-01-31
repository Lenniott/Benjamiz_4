import {  navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import {Menu} from "lucide-react"
import {Logo} from "../../assets/images/logo"


export function NavBar() {
    const MobileMenu = ()=>{
        return(
        <Sheet aria-label="navigation menu">
        <SheetTrigger className="flex sm:hidden">
            <Button variant={"secondary"} size={"icon"} className={"w-10 h-10 p-0"}>
                <Menu/>
            </Button>

        </SheetTrigger>
        <SheetContent className="flex flex-col items-baseline justify-end pb-8">
            <SheetTrigger className="hover:bg-accent">
                <Link to="/">
                    <SheetClose>
                            Home  
                    </SheetClose>
                </Link>
            </SheetTrigger>

            <SheetTrigger>
                <Link to="/works">
                    <SheetClose>
                    Works  
                    </SheetClose>
                </Link>
            </SheetTrigger>

            <SheetTrigger>
                <Link to="/about">
                    <SheetClose>
                    About  
                    </SheetClose>
                </Link>
            </SheetTrigger>

            <SheetTrigger>
                <Link to="/experience">
                    <SheetClose>
                    Experience  
                    </SheetClose>
                </Link>
            </SheetTrigger>
        </SheetContent>
    </Sheet>
        )
    }

    const DesktopMenu = ()=>{
        return(
        <NavigationMenu aria-label="navigation menu" className="hidden sm:block ">
        <NavigationMenuList className="gap-2">

            <NavigationMenuItem>
                <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link to="/works">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Works</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link to="/experience">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>





            <NavigationMenuItem>
                <ModeToggle/>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
        )
    }
//fixed top-0 z-50 py-2 px-4 max-w-3xl mx-auto w-screen flex items-center bg-gradient-to-b from-background to-transparent
    return (
        <>
        <div className="fixed bottom-0 sm:top-0 z-50 py-2 px-8 max-w-3xl mx-auto w-screen flex items-center backdrop-blur-sm bg-white/50 dark:bg-[#080a0c]/50  " >
        <div className="flex flex-grow">
            <Logo/>
        </div>

        <DesktopMenu/>
        <MobileMenu/>
        </div>

        </>

    )
}