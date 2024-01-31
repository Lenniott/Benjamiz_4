
import { Container } from '../../components/container';
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/test.json'
export function ExperiencePage() {

    return (
        <div className='grid grid-cols-1 gap-4 mt-8'>
            <Container >
                    <MediumRenderer articleJson={article}/>
            </Container>
        </div>
    );
};
