
import { Container} from '../components/container';
import heroImage from '../../static/images/hero.webp';
import { Container_NavToPage } from '../components/molicules/Container_NavToPage';
import { MainStatments } from '../components/molicules/MainStatments';
import { HeroHeader } from '../components/molicules/HeroHeader';
import { DoubleContainers } from '../components/molicules/DoubleContainers';
import { FaMedium } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
export function HomePage() {


    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container variant="clear" className='gap-6'>
                <HeroHeader heroImage={heroImage} />
            </Container >

            {/* FIRST SECTION */}
            <Container variant='linear' delay={0.2}>
                <MainStatments>
                    <p className="font-light text-base sm:text-lg">When we improve <b className='text-accent font-serif font-medium '>how</b> we solve problems</p>
                    <p className='font-light text-muted-foreground text-base sm:text-lg'>We improve <b className='text-accent font-serif font-medium '>what</b> problems we solve</p>
                </MainStatments>           
            </Container>
            <DoubleContainers 
                childrenOne={
                    <Container_NavToPage header="Article" link="/works/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" title="Your design is only as good as your organisation’s ability to problem solve" image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' alt='man stand alone on steps as crowd walk up a hill' />
                } 
                childrenTwo={
                    <Container_NavToPage header="Article" link="/works/bicycle-exercise" title="Clarity in collaboration: Describe a bicycle exercise" image='https://cdn-images-1.medium.com/max/1024/1*A77fKwsjzwNV-M6yVOaChA.jpeg' alt='group of professionals all thinking of different shapes with a prompt on the whiteboard saying "I need a shape."' />
            }/>
            
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
