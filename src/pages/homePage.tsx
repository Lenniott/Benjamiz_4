import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { H1, H3, H4, LeadText, MutedText } from '../components/typography';
import { Container } from '../components/container';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {ArrowRight} from 'lucide-react'
import {   Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle, } from '../components/ui/card';
import heroImage from '../assets/images/hero.webp';
export function HomePage() {
    const navigate = useNavigate();


    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container containerPosition={0}>
            <div className='flex'>
                    <Avatar className="relative flex w-24 h-24 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-full" >
                        <AvatarImage className='aspect-square h-full w-full grayscale' src={heroImage} alt="Avatar"/>
                        <AvatarFallback className="flex text-2xl h-full w-full items-center justify-center rounded-full bg-accent text-accent-foreground">BM</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex flex-col  justify-center'>
                    <H1 alignMobile='left'>Think visually,<br/>validate regularly,<br/>pivot strategically.</H1>
                    <p className="scroll-m-20 font-heading text-md font-light text-muted-foreground tracking-tight first:mt-0 sm:text-lg" >Product Designer, Benjamin Mizrany</p>
                </div>
            </Container >
            <div className='flex flex-col sm:flex-row items-center gap-4'> 

                
                <Container variant='unstyled' className="h-[100%] items-center" containerPosition={1} >
                    <Card className='px-8 py-4 h-[100%] grid grid-cols-1 sm:grid-cols-2 '>
                    <div className='flex flex-col justify-start sm:justify-center h-full pt-4 sm:pt-0 pl-0 sm:pl-2 gap-2 sm:gap-4 mb-6 sm:mb-0 mr-0 sm:mr-4'>
                            <LeadText>I believe the path we take matters as much as where we are going.</LeadText>
                            <MutedText>So I call for alignment between the team and regular contact with users.</MutedText>
                    </div> 

                    <div>
                    <CardHeader className='flex flex-row items-center justify-start m-0 p-0  '>
                        <H3 addSlash={true}>Article</H3>
                    </CardHeader>
                    
                    <CardContent className="flex gap-4 p-0 items-center">
                        
                        <img className="rounded-sm h-24  w-24" src="https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg" alt="man stand alone on steps as crowd walk up a hill"/>
                        <CardTitle ><H4>Your design is only as good as your organisation’s ability to problem solve</H4></CardTitle>
                    </CardContent>
                    
                    <CardFooter className='flex justify-end m-0 p-0 flex-grow'>

                        <Button variant='link' onClick={() => navigate('/experience')} className='group flex flex-grow gap-1 items-center w-[40%] shadow-none h-auto translate-x-4 justify-end'>
                        Read more
                            <ArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
                            
                        </Button>
                    </CardFooter>
                    </div>


                    </Card>

                </Container>

                </div>


        </div>
    );
};
