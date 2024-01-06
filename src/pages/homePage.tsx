import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { H1, LeadText, MutedText } from '../components/typography';
import { Container } from '../components/container';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function HomePage() {
    const navigate = useNavigate();


    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container containerPosition={0}>
            <div className='flex'>
                    <Avatar className="relative flex w-24 h-24 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-full" >
                        <AvatarImage className='aspect-square h-full w-full grayscale' src="src/assets/images/hero.webp" alt="Avatar"/>
                        <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex flex-col  justify-center'>
                    <H1 alignMobile='left'>Think visually,<br/>validate regularly,<br/>pivot strategically.</H1>
                    <p className="scroll-m-20 font-heading text-md font-light text-muted-foreground tracking-tight first:mt-0 sm:text-lg" >Product Designer, Benjamin Mizrany</p>
                </div>
            </Container >
            <Container containerPosition={1}>
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col justify-center w-72 pl-2 gap-4 mr-auto'>
                        <LeadText>I believe the path we take matters as much as where we are going.</LeadText>
                        <MutedText>So I call for alignment between the team and regular contact with users.</MutedText>
                    </div> 

                    <Button variant='link' onClick={() => navigate('/experience')} className='group flex flex-col gap-1 items-center w-[35%] shadow-none h-auto p-2'>
                        <img className=" shrink-0 overflow-hidden rounded-md group-hover:shadow-md group-hover:scale-[1.02]  transition-all" src="https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg" alt="man stand alone on steps as crowd walk up a hill"/>
                        read more...
                    </Button>


                </div>

            </Container>
        </div>
    );
};
