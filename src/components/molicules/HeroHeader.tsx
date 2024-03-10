import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {motion} from "framer-motion"

export function HeroHeader({heroImage}:any) {
const header = 'h3 text-pretty font-bold';
    const order = [0.4,0.6,0.8,1,1.2]
    return (
        <>
        <div className='max-w-[160px] flex-1 flex-grow'>
        <Avatar className="relative not-italic flex h-40 w-40 shrink-0 overflow-hidden rounded-full" >
            <AvatarImage className='dark:contrast-[1.1] dark:brightness-[1.0] saturate-[0.88]  aspect-square h-full w-full' src={heroImage} alt="Avatar"/>
            <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
        </Avatar>
    </div>

    <div className='flex p-y-3 flex-col col-span-3 justify-center items-start flex-grow gap-2'>
        {/* <span className='h1 font-medium mb-2'>Learn constantly<br/>Think visually<br/>Validate regularly</span> */}
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{delay: order[0], duration: 0.5 }}
        className="h5 font-light text-muted-foreground" >
            Product Designer, Benjamin Mizrany
        </motion.div>

        <div className="flex flex-row gap-2">
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{delay: order[1], duration: 0.5 }}
        className={header}>
            Learn
        </motion.div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{delay: order[2], duration: 0.5 }}
        className={header}>
            Visualise
        </motion.div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{delay: order[3], duration: 0.5 }}
        className={header}>
            Validate
        </motion.div>            
        </div>



        <motion.p         
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{delay: order[4], duration: 0.5 }}
        className='p italic'>
           With a preference for the design ops and discovery, I work with organisations to create a human centered approach when developing products.
        </motion.p>


    </div>
    </>
    )
}