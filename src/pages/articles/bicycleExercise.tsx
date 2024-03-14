

import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/BicycleExercise.json'//'../../src/assets/data/test.json'
import { Content } from '../../components/molicules/Content';
export function BicycleExercise() {

    return (
        <div className='grid grid-cols-1 gap-4'>
            <MediumRenderer medium={true} articleJson={article}/>
            <Content/>
        </div>
    );
};
