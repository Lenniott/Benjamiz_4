import { Container } from "../container"
import { Card } from "./Card"

export const Content = () => {
    return(

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-8'>
        <Container variant='clear' horizontal={false} delay={0.2} className='p-0 m-0'>
        {/* <p className="h5 font-light text-muted-foreground whitespace-normal">
            Learning the right problems to solve<br className='sm:hidden'/><span className='hidden sm:inline'> / </span>Learning to solve problems right 
        </p> */}
        
            <Card 
                type="Case study" 
                link="/cs1" 
                title="Improving customer relationships through product enhancements" 
                image='https://i.ibb.co/vzyzVBc/Frame-449.png' 
                alt='A user interface for selecting and previewing document versions, featuring a version timeline and detailed change summaries.'/>           
        </Container>
        
        <Container variant='clear' horizontal={false} delay={0.4} className='p-0 m-0'>
            <Card 
                type="Article" 
                link="/works/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" 
                title="Your design is only as good as your organisation’s ability to problem solve" 
                image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' 
                alt='man stand alone on steps as crowd walk up a hill'/>  
        </Container>
        <Container variant='clear' horizontal={false} delay={0.4} className='p-0 m-0'>
            <Card 
                type="Article"
                link="/works/bicycle-exercise"
                title="Clarity in collaboration: Describe a bicycle exercise"
                image='https://cdn-images-1.medium.com/max/1024/1*A77fKwsjzwNV-M6yVOaChA.jpeg'
                alt='group of professionals all thinking of different shapes with a prompt on the whiteboard saying "I need a shape."' />
        </Container>
        </div>
    )
}