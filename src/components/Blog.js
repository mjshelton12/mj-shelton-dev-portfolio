import {useState} from 'react'
import { blogData } from '../data/blogData';
import Post from './Post'
import BlogPost from './BlogPost'

export default function Blog() {
    const [article, setArticle] = useState({display: "Blog", object: {}})
    const list = blogData.map((blog) => <Post key={blog.id} post={blog} setArticle={setArticle} />);

    function displayContent(){
        switch(true){
            case article.display > 0:
            return (<BlogPost setArticle={setArticle} article={article}/>)

            case article.display = 'Blog':
            return (list)

            default:
               return (list)
        }
    }

    return(
        <div className='project-container'>
            {displayContent()}
        </div>
)}