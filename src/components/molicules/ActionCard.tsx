//external libraries
import { useNavigate } from 'react-router-dom';

//components
import { H3, H4, LeadText, MutedText } from '../typography';
import { Container } from '../container';
import { Button } from '../ui/button';
import {ArrowRight} from 'lucide-react'
import {   Card,
    CardContent,
    CardFooter,
    CardTitle,
 } from '../ui/card';

// Other imports

interface ActionCardProps {
    leadText: string;
    mutedText: string;
    linkTitle: string;
    img: string;
    alt: string;
    typeOfLink: string;
    to: string;
    actionPosition: number;
}
//I believe the path we take matters as much as where we are going.
//So I call for alignment between the team and regular contact with users.
//Article
//Your design is only as good as your organisation’s ability to problem solve
//"https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg"
//"man stand alone on steps as crowd walk up a hill"
export const ActionCard = ({leadText, mutedText, linkTitle, img, alt, typeOfLink, to,actionPosition}:ActionCardProps) => {
    const navigate = useNavigate();
    // Determine order based on actionPosition
    const isEven = actionPosition % 2 === 0;
    const podAClass = `flex flex-col justify-start sm:justify-center h-full pt-4 sm:pt-0 pl-0 sm:pl-2 gap-2 sm:gap-4 mb-6 sm:mb-0 mr-0 sm:mr-4 ${isEven ? 'order-last' : 'order-first'}`;
    const podBClass = isEven ? 'mr-0 sm:mr-16 -order-last' : 'ml-0 sm:ml-16 -order-first';
  
    return (
      <div>
        <Container variant='unstyled' className="h-[100%] items-center" containerPosition={actionPosition}>
          <Card className='px-8 py-4 h-[100%] grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div id="bento-pod-A" className={podAClass}>
                <LeadText>{leadText}</LeadText>
                <MutedText>{mutedText}</MutedText>
            </div>
            <div id="bento-pod-B" className={podBClass}>
                <div className='flex flex-row items-center justify-start m-0 p-0  '>
                    <H3 addSlash={true}>{typeOfLink}</H3>
                </div>
                <CardContent className="flex gap-4 p-0 items-center py-4">
                    <img className="rounded-sm h-24  w-24" src={img} alt={alt}/>
                    <CardTitle ><H4>{linkTitle}</H4></CardTitle>
                </CardContent>
                <CardFooter className='flex justify-end m-0 p-0 flex-grow'>
                    <Button variant='link' onClick={() => navigate(to)} className='pl-0 group flex flex-grow gap-1 items-center w-[40%] shadow-none h-auto justify-start'>
                        Read more
                        <ArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
                            
                    </Button>
                </CardFooter>
            </div>
          </Card>
        </Container>
      </div>
    );
  };
  


// You can add more exports as needed
// export const AnotherComponent = () => {
//   // ...
// };