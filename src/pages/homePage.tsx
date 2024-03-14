
import heroImage from '../images/hero.webp';
import { HeroHeader } from '../components/molicules/HeroHeader';
import {Content} from '../components/molicules/Content';
export function HomePage() {


    return (
        <div className='flex flex-col gap-4 w-fit'>


            <HeroHeader heroImage={heroImage} />
            <Content />
        </div>
    );
};
