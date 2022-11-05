import { portfolioData } from '../data/portfolioData';
import Project from './Project'

export default function Portfolio() {

    const list = portfolioData.map((project) => <Project key={project.id} project={project}/>);
    return(
        <div className='project-container'>
            {list}
        </div>
)}