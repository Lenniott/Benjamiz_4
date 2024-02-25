
import { Container} from '../components/container';
import heroImage from '../../public/images/hero.webp';
import { Card } from '../components/molicules/Card';
import { MainStatments } from '../components/molicules/MainStatments';
import { HeroHeader } from '../components/molicules/HeroHeader';
import { FaMedium } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
export function HomePage() {


    return (
        <div className='flex flex-col gap-4 w-fit'>

            <Container variant="clear" className='gap-6'>
                <HeroHeader heroImage={heroImage} />
            </Container >

            {/* FIRST SECTION */}
            <Container variant='linear' horizontal={false} delay={0.2} className='gap'>
            <MainStatments>
                    <p className="font-light text-lg sm:text-xl">When we improve <b className='font-bold text-base sm:text-lg'>how</b> we solve problems</p>
                    <p className='font-light text-muted-foreground text-lg sm:text-xl'>We improve <b className='font-bold text-base sm:text-lg'>what</b> problems we solve</p>
            </MainStatments>   
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Card 
                    type="Article" 
                    link="/works/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" 
                    title="Your design is only as good as your organisation’s ability to problem solve" 
                    image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' 
                    alt='man stand alone on steps as crowd walk up a hill'/>  
                <Card 
                    type="Article"
                    link="/works/bicycle-exercise"
                    title="Clarity in collaboration: Describe a bicycle exercise"
                    image='https://cdn-images-1.medium.com/max/1024/1*A77fKwsjzwNV-M6yVOaChA.jpeg'
                    alt='group of professionals all thinking of different shapes with a prompt on the whiteboard saying "I need a shape."' />
            </div>
              
            </Container>
            
            <a href="https://medium.com/@benjamin.mizrany/">
            <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className='w-fit'>
                            <Container variant='solid' className='grid w-fit text-sm group hover:bg-accent ease-in delay-150 transition-all'>
                                <FaMedium className='w-8 h-8 text-muted-foreground group-hover:text-accent-foreground' />
                            </Container>
                        </TooltipTrigger>
                        <TooltipContent side='bottom'>
                        <p>Go to medium</p>
                        </TooltipContent>
                    </Tooltip>
            </TooltipProvider>
            </a>
        </div>
    );
};
