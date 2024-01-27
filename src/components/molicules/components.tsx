import { Button } from "../ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
  } from "../ui/sheet";

import { ChevronRight } from "lucide-react"

export function Components(){

    return (
        <>
            <h3 className="h4">Button Sizes</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 mb-8">
            <Button size={"lg"}>Large</Button>
            <Button >Default</Button>
            <Button size={"sm"}>Small</Button>

            <Button size={"icon"}>
                <ChevronRight className="h-4 w-4" />
            </Button>

            </div>
            <h3 className="h4">Button Types</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 mb-8">
            <Button >Default</Button>    
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"destructive"}>Destructive</Button>
            <Button variant={"ghost"}>Ghost</Button>
            <Button variant={"link"}>Link</Button>
            </div>
            <h3 className="h4">Sheet</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center place-items-start mb-8 py-4">
            <Sheet>
                <SheetTrigger className="flex gap-4 justify-center place-items-center">
                    <Button variant={"secondary"}>
                        Click me!
                    </Button>

                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Benjamiz</SheetTitle>
                        <SheetDescription>About me</SheetDescription>
                    </SheetHeader>
                    <div className="flex-grow"> {<p className="p">I am a UX designer based in Somerset, focused on building user-centered solutions. I have experience creating wireframes, prototypes and proof of concepts using Figma, and maintaining a component library, using auto-layouts to enable consistent and responsive layouts. I am skilled in collaborating with product managers, stakeholders, developers, and customers to understand and better meet their needs. I also create interactive front-end prototypes to validate design concepts and ensure the best user experience. I am dedicated to designing intuitive solutions that meet the needs of my clients, and I am excited to bring my skills to new challenges.</p>}</div>
                    <SheetFooter>
                        And that's all I have to say about that.
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            </div>


            Dialog
            Sheet
            ToolTip
        </>
    )
}

