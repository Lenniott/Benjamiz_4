import { Container } from "../container";

interface ExperienceProps {
    experiences: ExperienceItem[];
  }
  
  interface ExperienceItem {
    company: string;
    industry: string;
    description: string;
    position?: string;
    duration?: string; // Make duration optional
    responsibilities?: string[]; // This might also need to be optional
    positions?: Position[];
  }
  
  
  interface Position {
    title: string;
    duration: string;
    responsibilities: string[];
  }
  
  const animateDirection = (index: number)=>{ return index % 2 !== 0? true : false}

  const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
    
    return (
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Container key={index} horizontal={false} variant="solid" className="gap-4" animateFromEnd={animateDirection(index)}>
            <div>
                <h3 className="h4">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.industry}</p>
            </div>

            <p className="text-base font-light">{exp.description}</p>
            {exp.position && (
              <div>
                <h4 className="h6 mb-2">{exp.position} ({exp.duration})</h4>
                <ul className="flex flex-col list-disc pl-8 gap-1 mb-2 font-light">
                  {exp.responsibilities?.map((responsibility, rIndex) => (
                    <li key={rIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={`pb-${exp.positions ? 4 : 0}`}>
            {exp.positions && exp.positions.map((position, pIndex) => (
              <div key={pIndex}>
                <h4 className="h6 mb-2">{position.title} ({position.duration})</h4>
                <ul className="flex flex-col list-disc pl-8 gap-1 font-light">
                  {position.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </Container>
        ))}
      </div>
    );
  };
  
  export default ExperienceComponent;