import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { motion } from 'framer-motion';
import { H1, H2 } from '../components/typography';
export function HomePage() {

    return (
        <div className='grid grid-cols-1 gap-4'>

            <motion.div className='flex flex-col sm:flex-row gap-4 sm:gap-8 border border-card-border rounded-md p-4 sm:p-8 bg-card'
                                initial={{ x: -200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                <div className='flex justify-center items-center'>
                    <Avatar className="relative flex w-24 h-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full" >
                        <AvatarImage className='aspect-square h-full w-full grayscale' src="src/assets/images/hero.jpg" alt="Avatar"/>
                        <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex flex-col gap-2 sm:gap-4 justify-center'>
                    <H1>Think visually,<br/>validate regularly,<br/>pivot when necessary</H1>
                    <H2>Product Designer, Benjamin Mizrany</H2>
                </div>
            </motion.div>
        </div>
    );
};
