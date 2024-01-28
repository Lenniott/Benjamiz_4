import { Container, ContainerGrid, ContainerGridColumn } from "../container";
import {useWindowSize} from "../../scripts/useWindowSize"
interface ContainerProps {
    childrenOne: React.ReactNode;
    childrenTwo?: React.ReactNode;
}


export function DoubleContainers({childrenOne, childrenTwo}:ContainerProps) {
    const size = useWindowSize()

    const firstVariant = size.width && size.width < 640 ? 'linear' : 'solid';

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <Container variant={firstVariant} className='z-10' delay={0.4}>
            <ContainerGrid>
                <ContainerGridColumn>
                {childrenOne}
                </ContainerGridColumn>
            </ContainerGrid>
        </Container>    
        <Container variant="linear" delay={0.6}>
            <ContainerGrid>
                <ContainerGridColumn>
                {childrenTwo}
                </ContainerGridColumn>
            </ContainerGrid>
        </Container>    
        </div>
    )
}