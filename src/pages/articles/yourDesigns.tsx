
import { Container } from '../../components/container';
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/yourDesigns.json'//'../../src/assets/data/test.json'

import { BreadCrum } from '../../components/molicules/breadCrum';
export function YourDesignArticle() {

    return (
        <div className='grid grid-cols-1 gap-4'>
            <BreadCrum className='mx-4' {...{label: 'Works'}} to='/works'/>
            <Container>
                    <MediumRenderer articleJson={article}/>
            </Container>
        </div>
    );
};
