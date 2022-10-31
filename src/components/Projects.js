import { projectData } from '../data/projectData';

export default function Projects() {
    return(
        <>
        {projectData.map((project)=>(
        <p>{project.title}</p>
        ))}
        </>
)}