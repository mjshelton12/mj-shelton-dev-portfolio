import {useState} from 'react'
import { blogData } from '../data/blogData';
import Post from './Post'
import BlogPost from './BlogPost'

export default function Blog() {
    const [article, setArticle] = useState({title: "Blog", object: {}})
    const list = blogData.map((blog) => <Post key={blog.id} post={blog} setArticle={setArticle} />);

    function displayContent(){
        switch(true){
            case article.title > 0:
            return (<BlogPost setArticle={setArticle} article={article}/>)

            case article.title = 'Blog':
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