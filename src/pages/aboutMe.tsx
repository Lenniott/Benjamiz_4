import React from 'react';
import { Link } from 'react-router-dom';
import BookScroll  from '../components/molicules/BookScroll';
import books from '../assets/data/books.json';
import certificates from '../assets/data/certificates.json';
import { Container } from '../components/container';
import Image  from '../components/molicules/Image';
import LoadedQuote from '../components/features/LoadedQuote';

export const AboutMePage: React.FC<{}> = () => {
    const altitudesAlt = "Abstract illustration showing the concept of 'Altitude Thinking' in product development with three levels: At the 'Product' level, an opportunity tree is depicted; at the 'Program' level, a user journey map is represented; and at the 'Feature' level, a Kanban board is visualized, all connected by dashed lines indicating progression."

    


    const meBen = {
        name: "Benjamin Mizrany",
        age: "18/08/1989",
        image: 'https://avatars.githubusercontent.com/u/1218301?v=4',
        location: "Bath, Uk",
        family: "Married + 2 Children",
        work: "Mayden Ltd",
        hobbies: "🎤 Singing, 📝 Writing, 🧗🏽‍♂️Climbing, 🏃🏽‍♂️Running"
    }


    return (
        <div className="grid grid-cols-1 gap-4">
            <h1 className="h3 text-accent font-serif py-8"><p className='text-foreground'>/</p>About</h1>
            <div className='flex flex-col sm:flex-row gap-4'>
                <Container horizontal={false} className="App flex  gap-1">
                    <p className='p font-light text-muted-foreground'>{meBen.name}</p>
                    <p className='p text-foreground'>{meBen.age}</p>
                    <p className='p text-foreground'>{meBen.location}</p>
                    <p className='p text-foreground'>{meBen.family}</p>
                    <p className='p text-foreground'>{meBen.work}</p>
                    <p className='p text-foreground'>{meBen.hobbies}</p>
                </Container>
            <LoadedQuote/>
            </div>
            <Container horizontal={false} className="App flex  gap-4">
                <p className='h5 font-light text-muted-foreground'>Most ideas create zero or negative value for users</p>
                <p>I focus on rapidly learning, generating and validating ideas. This means not being precious with solutions and confronting my bias.</p>
                <div className='flex flex-col gap-2 px-4 py-0 border-l-4 border-l-muted-foreground'>
                    <i className=''>“I really appreciate that you are not precious about your ideas” </i>
                    <p className='flex flex-grow gap-1 text-sm'>– Product Owner<Link className="link" to="experience">@Mayden</Link></p>
                </div>
            </Container>

            <Container horizontal={false} className="App flex items-center gap-4">
                <p className='h5 font-light text-muted-foreground'>Product deisgn is more than aesthetics</p>
                <div className='flex flex-col sm:flex-row gap-8 items-center sm:mt-4'>

                    <Image src="https://live.staticflickr.com/65535/53546176673_a94558c15e_b.jpg" alt={altitudesAlt} description={altitudesAlt}/>

                    <p>Thinking at different altitudes allows me to envision end states and their incremental slices, ensuring we deliver value continuously.</p>
                </div>
            </Container>
            <Container horizontal={false} className="App" >
             <h2 className="h5 font-light text-muted-foreground">External Influences</h2>
                <BookScroll items={books} />
            </Container>
            <Container horizontal={false} className="App">
             <h2 className="h5 font-light text-muted-foreground">Certificates</h2>
                <BookScroll items={certificates}/>
            </Container>
        </div>
    );
}

