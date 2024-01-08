
import { Container } from '../../components/container';
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/test.json'
import { PageHeader } from '../../components/molicules/BackPage';
export function ExperiencePage() {

    return (
        <div className='grid grid-cols-1 gap-4 mt-4'>
            <PageHeader {...{title: 'Article'}} backButton={true}/>
            <Container containerPosition={0}>
                    <MediumRenderer articleJson={article}/>
            </Container>
        </div>
    );
};
