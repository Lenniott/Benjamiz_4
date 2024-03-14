import experienceData from '../assets/data/experience.json';
import ExperienceComponent from '../components/molicules/ExperienceComponent';



export function ExperiencePage() {
    const { experiences } = experienceData;
    return (
        <div className='grid grid-cols-1 gap-4 mt-4'>
            <h1 className="h3 text-accent font-serif pb-4 flex"><p className='text-foreground'>/</p>Experience</h1>
            <ExperienceComponent experiences={experiences} />
        </div>
    );
};
