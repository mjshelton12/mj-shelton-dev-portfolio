import {useState} from 'react'
import { blogData } from '../data/blogData';
import Post from './Post'
import BlogPost from './BlogPost'

export default function Blog({setCurrent}) {
    const [article, setArticle] = useState("Blog")
    const list = blogData.map((blog) => <Post key={blog.id} post={blog} setArticle={setArticle} setCurrent={setCurrent} />);

    function displayContent(){
        switch(article){
            case{}:
            return (<BlogPost />)

            default:
               return (list)
        }
    }

    return(
        <div className='project-container'>
            {displayContent()}
        </div>
)}