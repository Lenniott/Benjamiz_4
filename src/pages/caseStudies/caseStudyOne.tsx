// import { UserProfileContainer } from "../../components/molicules/UserProfileContainer"
import MediumRenderer from '../../components/features/MediumRenderer';
import article from '../../../src/assets/data/versionHistoy.json'
export function CaseStudyOne() {
    return (
        <>
        {/* <UserProfileContainer 
        userName="Learning Designers"
        occupation="Design and develop educational courses and materials, focusing on e-learning and digital platforms."
        goals="Create engaging, effective, and user-friendly educational content. Prioritise innovative teaching methods and technologies, seeking tools that enable creative flexibility and robust course management."
        challenges="Engaging lecturers in the shift from traditional classroom teaching to online formats, while also balancing pedagogical effectiveness with the technical limitations of digital platforms."
        interaction="Utilise the platform for designing and delivering online courses."
        /> */}
        <MediumRenderer articleJson={article}/>
        </>
    )
}

