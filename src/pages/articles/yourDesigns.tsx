
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/yourDesigns.json'//'../../src/assets/data/test.json'
import { Content } from '../../components/molicules/Content';
export function YourDesignArticle() {

    return (
        <div className='grid grid-cols-1 gap-4'>
            <MediumRenderer medium={true} articleJson={article}/>
            <Content/>
        </div>
    );
};
