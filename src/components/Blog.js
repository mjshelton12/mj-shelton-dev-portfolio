import { blogData } from '../data/blogData';
import Project from './Project'

export default function Blog() {
    const list = blogData.map((blog) => <Project key={blog.id} project={blog}/>);
    return(
        <div className='project-container'>
            {list}
        </div>
)}