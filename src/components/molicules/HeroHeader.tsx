import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function HeroHeader({heroImage}:any) {
    return (
        <>
        <div className='max-w-[160px] flex-1 flex-grow'>
        <Avatar className="relative not-italic flex h-40 w-40 shrink-0 overflow-hidden rounded-full" >
            <AvatarImage className='dark:contrast-[1.1] dark:brightness-[1.0] saturate-[0.88]  aspect-square h-full w-full' src={heroImage} alt="Avatar"/>
            <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
        </Avatar>
    </div>

    <div className='flex p-y-3 flex-col col-span-3 justify-center items-start flex-grow gap-2'>
        <span className='h3 font-serif text-accent'>Think visually<br/>Validate regularly<br/>Pivot strategically</span>
        <span className="font-light text-muted-foreground text-base sm:text-lg" >Product Designer, Benjamin Mizrany</span>
    </div>
    </>
    )
}