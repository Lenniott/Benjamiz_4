
import { Container } from '../../components/container';
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/BicycleExercise.json'//'../../src/assets/data/test.json'

import { PageHeader } from '../../components/molicules/BackPage';
export function BicycleExercise() {

    return (
        <div className='grid grid-cols-1 gap-4 mt-8'>
            <PageHeader {...{title: 'Article'}} backButton={false}/>
            <Container>
                    <MediumRenderer articleJson={article}/>
            </Container>
        </div>
    );
};
