//external libraries
import { useNavigate } from 'react-router-dom';

//components
import { H3, H4, LeadText, MutedText } from '../typography';
import { Container } from '../container';
import { Button } from '../ui/button';
import {ArrowRight} from 'lucide-react'
import {   Card,
    CardContent,
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
    const podAClass = `className="flex flex-col items-start gap-4 self-stretch   sm:items-start h-full py-4 sm:pt-0 gap-2 sm:gap-4  sm:mb-0  ${isEven ? 'order-last sm:pl-8 sm:border-l ' : ' sm:pr-8 sm:border-r  order-first '} sm:border-card-border`;
    const podBClass = `h-fit ${isEven ? ' -order-last sm:pr-8 ' : ' sm:pl-8 -order-first'}`;
  
    return (
      <div>
        <Container  className="h-[100%] rounded-lg bg-gradient-to-l from-background from-20% to-darkest to-80% shadow-sm flex p-8 flex-col justify-center items-start gap-6 flex-grow" >
          <Card className='px-8 py-4 pr-12 h-[100%] grid grid-cols-1 sm:grid-cols-2 '>
            <div id="bento-pod-A" className={podAClass}>
                <LeadText className='self-stretch'>{leadText}</LeadText>
                <MutedText className='self-stretch'>{mutedText}</MutedText>
            </div>
            {/* <div id="bento-pod-B" className={podBClass}>
                <div className='flex flex-row items-center justify-start m-0 p-0 pt-4 h-[24px] sm:h-auto'>
                    <H3 addSlash={true}>{typeOfLink}</H3>
                </div>
                <CardContent className="flex gap-4 p-0 items-top py-4">
                    <img className="rounded-sm h-24  w-24" src={img} alt={alt}/>
                    <CardTitle className='grid '>
                        <H4>{linkTitle}</H4>

                        <Button variant='link' onClick={() => navigate(to)} className='pl-0 group flex  gap-1 items-center  shadow-none h-auto justify-start '>
                        Read more
                        <ArrowRight className='text-foreground w-4 h-4 group-hover:translate-x-[10px] translate-y-[2px] transition-transform sm:w-6 sm:h-6'/>
                            
                    </Button>
                    </CardTitle>
                </CardContent>
            </div> */}
          </Card>
        </Container>
      </div>
    );
  };
  


// You can add more exports as needed
// export const AnotherComponent = () => {
//   // ...
// };