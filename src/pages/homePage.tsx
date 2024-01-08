import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Container } from '../components/container';
import heroImage from '../assets/images/hero.webp';
import { ActionCard } from '../components/molicules/ActionCard';
import versionHistory from '../assets/images/versionHstory/placeHolderImage.webp';
export function HomePage() {



    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container containerPosition={0}>
            <div className='flex'>
                    <Avatar className="relative not-italic flex w-24 h-24 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-full" >
                        <AvatarImage className='dark:contrast-[1.2] dark:brightness-[1.0] aspect-square h-full w-full dark:grayscale' src={heroImage} alt="Avatar"/>
                        <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex flex-col  justify-center'>
                    <mark className='scroll-m-20 leading-10 tracking-wide text-2xl text-left sm:text-left font-serif text-accent font-medium sm:text-3xl bg-transparent'>Think visually<br/>Validate regularly<br/>Pivot strategically</mark>
                    <p className="scroll-m-20 font-heading text-md font-light text-muted-foreground tracking-tight first:mt-0 sm:text-lg" >Product Designer, Benjamin Mizrany</p>
                </div>
            </Container >


            <ActionCard leadText="I believe the path we take matters as much as where we are going." mutedText="So I call for alignment between the team and regular contact with users." linkTitle="Your design is only as good as your organisation’s ability to problem solve" img="https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg" alt="man stand alone on steps as crowd walk up a hill" typeOfLink="Article" to="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" actionPosition={1} />

            <ActionCard leadText="I believe we are drawn to marketing but stay for results." mutedText="So I design software that's simple, functional, and easy to use." linkTitle="The history of version control" img={versionHistory} alt="man stand alone on steps as crowd walk up a hill" typeOfLink="Article" to="/" actionPosition={2} />


        </div>
    );
};
