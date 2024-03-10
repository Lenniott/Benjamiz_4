
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/yourDesigns.json'//'../../src/assets/data/test.json'
export function YourDesignArticle() {

    return (
        <div className='grid grid-cols-1 gap-4'>
                    <MediumRenderer medium={true} articleJson={article}/>
        </div>
    );
};
