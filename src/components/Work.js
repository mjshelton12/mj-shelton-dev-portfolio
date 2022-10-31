import { workData } from '../data/workData';

export default function Work() {
    return(
        <>
        {workData.map((job)=>(
        <p>{job.title}</p>
        ))}
        </>
)}