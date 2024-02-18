
import BookScroll  from '../components/molicules/BookScroll';
import books from '../assets/data/books.json';
import certificates from '../assets/data/certificates.json';
import { Container } from '../components/container';
export const AboutMePage: React.FC<{}> = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <Container horizontal={false} className="App" >
             <h2 className="text-lg font-bold">influenced by</h2>
                <BookScroll items={books} />
            </Container>
            <Container horizontal={false} className="App">
             <h2 className="text-lg font-bold">Certificates</h2>
                <BookScroll items={certificates}/>
            </Container>
        </div>
    );
}

