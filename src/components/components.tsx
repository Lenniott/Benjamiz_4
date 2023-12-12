import { Button } from "./ui/button";
import { H3} from "./typography";
import { ChevronRight } from "lucide-react"

export function Components(){

    return (
        <>
            <H3>Button Sizes</H3>
            <div className="flex gap-4 py-4 mb-8">
            <Button size={"lg"}>Large</Button>
            <Button >Default</Button>
            <Button size={"sm"}>Small</Button>

            <Button size={"icon"}>
                <ChevronRight className="h-4 w-4" />
            </Button>

            </div>
            <H3>Button Types</H3>
            <div className="flex gap-4 py-4 mb-8">
            <Button >Default</Button>    
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"destructive"}>Destructive</Button>
            <Button variant={"ghost"}>Ghost</Button>
            <Button variant={"link"}>Link</Button>
            </div>
            Card
            Dialog
            Sheet
            ToolTip
        </>
    )
}

