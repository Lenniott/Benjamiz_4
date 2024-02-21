import React from 'react';
import { Link } from 'react-router-dom';
import BookScroll  from '../components/molicules/BookScroll';
import books from '../assets/data/books.json';
import certificates from '../assets/data/certificates.json';
import { Container } from '../components/container';
import Image  from '../components/molicules/Image';
export const AboutMePage: React.FC<{}> = () => {
    const altitudesAlt = "Abstract illustration showing the concept of 'Altitude Thinking' in product development with three levels: At the 'Product' level, an opportunity tree is depicted; at the 'Program' level, a user journey map is represented; and at the 'Feature' level, a Kanban board is visualized, all connected by dashed lines indicating progression."

    return (
        <div className="grid grid-cols-1 gap-4">
            <h1 className="h3 text-accent font-serif py-8"><p className='text-foreground'>/</p>About</h1>
            <Container horizontal={false} className="App flex items-center gap-4">
                <p className='h4 text-muted-foreground'>Most ideas create zero or negative value for users</p>
                <p>I focus on rapidly learning, generating and validating ideas. This means not being precious with solutions and confronting my bias.</p>
                <div className='flex flex-col gap-4 px-4 py-2 border-l-2 border-l-foreground'>
                    <i className='font-serif text-xl text-muted-foreground'>“I really appreciate that are not precious about you ideas” </i>
                    <p className='flex flex-grow gap-1'>– Product Owner<Link className="link" to="experience">@Mayden</Link></p>
                </div>
            </Container>

            <Container horizontal={false} className="App flex items-center gap-4">
                <p className='h4 text-muted-foreground'>Product deisgn is more than aesthetics</p>
                <div>
                    <p>Thinking at different altitudes allows me to envision end states and their incremental slices, ensuring we deliver value continuously.</p>
                    <Image src="src/assets/images/versionHstory/Altitude.png" alt={altitudesAlt} description={altitudesAlt}/>
                </div>
            </Container>
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

