import { blogData } from '../data/blogData';
import Post from './Post'

export default function Blog() {
    const list = blogData.map((blog) => <Post key={blog.id} post={blog}/>);
    return(
        <div className='project-container'>
            {list}
        </div>
)}