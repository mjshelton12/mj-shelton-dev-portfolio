// import { blogData } from '../data/blogData';

export default function BlogPost({setArticle, article}) {
    // const list = blogData.map((blog) => <Post key={blog.id} post={blog}/>);
    return(
        <div className='project-container'>
            <p>{article.object.title}</p>
            <button href="#" onClick={() => {
        setArticle({title: 'Blog', object: {}})
        }}>Return to Blog List</button>
        </div>
)}