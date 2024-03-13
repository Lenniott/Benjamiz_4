import React from 'react';
import { Link } from 'react-router-dom';
import BookScroll  from '../components/molicules/BookScroll';
import books from '../assets/data/books.json';
import certificates from '../assets/data/certificates.json';
import { Container } from '../components/container';
import Image  from '../components/molicules/Image';
import LoadedQuote from '../components/features/LoadedQuote';

export const AboutMePage: React.FC<{}> = () => {
    const altitudesAlt = "Abstract illustration showing the concept of 'Altitude Thinking' in product development with three levels: At the 'Product' level, an opportunity tree is depicted; at the 'Program' level, a user journey map is represented; and at the 'Feature' level, a Kanban board is visualized, all connected by dashed lines indicating progression.";
    const calculateYearsSince = (date: Date): number => {
      const today = new Date();
      let years = today.getFullYear() - date.getFullYear();
      const m = today.getMonth() - date.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        years--;
      }
      return years;
    };

    const meBen = {
        name: "Benjamin Mizrany",
        age: calculateYearsSince(new Date('1989-08-18')),
        image: 'https://avatars.githubusercontent.com/u/1218301?v=4',
        location: "Bath, Uk",
        family: "wife and two children",
        work: "Mayden Ltd",
        hobbies: ["🎤 Singing", "📝 Writing"," 🧗🏽‍♂️Climbing","or  🏃🏽‍♂️Running"]
    }


    return (
        <div className="grid grid-cols-1 gap-4">
            <h1 className="h3 text-accent font-serif py-8 flex"><p className='text-foreground'>/</p>About</h1>
            <Container variant='solid' horizontal={false} className="App flex items-center flex-col sm:flex-row gap-4 sm:gap-8">
                <div className='flex flex-col items-center sm:mt-4 gap-4'>
                    <p>I am {meBen.name}, {meBen.age} years old, I live in {meBen.location} with my {meBen.family}. Currently working at <Link className="link" to="experience">{meBen.work}</Link></p>
                    <p>When I find a moment, you may find me  {meBen.hobbies.join(", ")}</p>    
                </div>

                <div className='items-center sm:mt-4'>
                <Image src="https://i.ibb.co/Gtx51jJ/MyFamily.png" className='w-72' alt={"Man and wife hold their two children"} description={"Man and wife hold their two children"}/>    
                </div>
                
            </Container>

            <LoadedQuote/>
            <Container horizontal={false} className="flex gap-4">
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

                    <p>I try to think about the project at different levels, I build a broard vision for us to iterate towards, then break that down so we can deliever value with every development cycle.</p>
                </div>
            </Container>

            
            <Container horizontal={false} className="App" >
             <h2 className="h5 font-light text-muted-foreground">External Influences</h2>
                <BookScroll imageSize={{width: 'w-32', height: 'h-fit'}} items={books} />
            </Container>
            <Container horizontal={false} className="App">
             <h2 className="h5 font-light text-muted-foreground">Certificates</h2>
                <BookScroll imageSize={{width: 'w-32', height: 'h-fit'}} items={certificates}/>
            </Container>
        </div>
    );
}

