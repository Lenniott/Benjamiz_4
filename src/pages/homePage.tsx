
import { Container} from '../components/container';
import heroImage from '../assets/images/hero.webp';
import { Container_NavToPage } from '../components/molicules/Container_NavToPage';
import { MainStatments } from '../components/molicules/MainStatments';
import { HeroHeader } from '../components/molicules/HeroHeader';
import { DoubleContainers } from '../components/molicules/DoubleContainers';
export function HomePage() {


    return (
        <div className='grid grid-cols-1 gap-4'>

            <Container variant="clear">
                <HeroHeader heroImage={heroImage} />
            </Container >

            {/* FIRST SECTION */}
            <Container variant='linear' delay={0.2}>
                <MainStatments>
                    <p className="font-light text-xl sm:text-2xl">I believe iterating on how we problem-solve is key to solving problems.</p>
                    <p className='font-light text-muted-foreground text-base sm:text-lg'>So I value evaluating and improving how we work.</p>
                </MainStatments>           
            </Container>
            <DoubleContainers 
                childrenOne={
                    <Container_NavToPage header="Article" link="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" title="Your design is only as good as your organisation’s ability to problem solve" image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' alt='man stand alone on steps as crowd walk up a hill' />
                } 
                childrenTwo={
                    <Container_NavToPage header="Article" link="/works/article/bicycle-exercise" title="Clarity in collaboration: Describe a bicycle exercise" image='https://cdn-images-1.medium.com/max/1024/1*A77fKwsjzwNV-M6yVOaChA.jpeg' alt='group of professionals all thinking of different shapes with a prompt on the whiteboard saying "I need a shape."' />
            }/>
            {/* Second SECTION */}
            <Container variant='linear' delay={0.2}>
                <MainStatments>
                    <p className="font-light text-xl sm:text-2xl">I believe beauty builds attention, value builds habits, beautiful value builds love.</p>
                    <p className='font-light text-muted-foreground text-base sm:text-lg'>So as a designer who focuses on B2B SaaS products, I’m excited to help you build the tools your customers love.</p>
                </MainStatments>           
            </Container>
            {/* <DoubleContainers 
                childrenOne={
                    <Container_NavToPage header="Article" link="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" title="Your design is only as good as your organisation’s ability to problem solve" image='https://cdn-images-1.medium.com/max/512/1*sZMLstXvHytFnSFF9vWgbw@2x.jpeg' alt='man stand alone on steps as crowd walk up a hill' />
                } 
                childrenTwo={
                    <Container_NavToPage header="Article" link="/works/article/bicycle-exercise" title="Clarity in collaboration: Describe a bicycle exercise" image='https://cdn-images-1.medium.com/max/1024/1*A77fKwsjzwNV-M6yVOaChA.jpeg' alt='group of professionals all thinking of different shapes with a prompt on the whiteboard saying "I need a shape."' />
            }/> */}
        </div>
    );
};
