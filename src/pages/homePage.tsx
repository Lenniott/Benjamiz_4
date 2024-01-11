import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Container, ContainerGrid, ContainerGridColumn } from '../components/container';
import heroImage from '../assets/images/hero.webp';
import { H3, H4, LeadText, MutedText } from '../components/typography';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container_NavToPage } from '../components/molicules/Container_NavToPage';
export function HomePage() {
    const navigate = useNavigate();


    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container variant="clear">
                <div className='max-w-[160px] flex-1 flex-grow'>
                    <Avatar className="relative not-italic flex h-40 w-40 shrink-0 overflow-hidden rounded-full" >
                        <AvatarImage className='dark:contrast-[1.1] dark:brightness-[1.0] saturate-[0.88]  aspect-square h-full w-full' src={heroImage} alt="Avatar"/>
                        <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex p-y-3 flex-col col-span-3 justify-center items-start flex-grow gap-2'>
                    <mark className='scroll-m-20 leading-loose tracking-wide text-2xl text-left sm:text-left font-serif text-accent font-medium sm:text-3xl bg-transparent'>Think visually<br/>Validate regularly<br/>Pivot strategically</mark>
                    <p className="scroll-m-20 font-heading text-md font-light text-muted-foreground tracking-tight first:mt-0 sm:text-lg" >Product Designer, Benjamin Mizrany</p>
                </div>
            </Container >

            <Container variant='linear'>
                <div className='flex flex-col justify-start gap-2'>
                    <LeadText className=''>I believe how we problem-solve is the key to solving the problems. </LeadText>
                    <MutedText className='self-stretch'>So I design clean and intuitive software interactions.</MutedText>
                </div>           
            </Container>
            <div className='flex gap-4'>
            <Container variant='solid'>
                <ContainerGrid>
                    <ContainerGridColumn>
                    <Container_NavToPage link="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" header="Your design is only as good as your organisation’s ability to problem solve" image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' alt='man stand alone on steps as crowd walk up a hill' />
                    </ContainerGridColumn>
                </ContainerGrid>
            </Container>    
            <Container variant='linear'>
                <ContainerGrid>
                    <ContainerGridColumn>
                    <Container_NavToPage link="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" header="Your design is only as good as your organisation’s ability to problem solve" image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' alt='man stand alone on steps as crowd walk up a hill' />
                    </ContainerGridColumn>
                </ContainerGrid>
            </Container>    
            </div>
            

            


            {/* <ActionCard leadText="I believe the path we take matters as much as where we are going." mutedText="" linkTitle="Your design is only as good as your organisation’s ability to problem solve" img="https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg" alt="man stand alone on steps as crowd walk up a hill" typeOfLink="Article" to="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" actionPosition={1} />

            <ActionCard leadText="I believe we are drawn to marketing but stay for results." mutedText="So I design software that's simple, functional, and easy to use." linkTitle="The history of version control" img={versionHistory} alt="man stand alone on steps as crowd walk up a hill" typeOfLink="Article" to="/" actionPosition={2} /> */}


        </div>
    );
};
