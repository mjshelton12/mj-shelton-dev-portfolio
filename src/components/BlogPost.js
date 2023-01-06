var parse = require('html-react-parser')

export default function BlogPost({setArticle, article}) {
    var blog = parse(article.object.blog)

    return(
        <div className="blog-post" data-aos="fade">
            <p className="blog-title">{article.object.title}</p>
            <div className="blog-content">
                <p>{blog}</p>
            </div>
            <p className="blog-disclaimer">Scroll to keep reading</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" href="#" onClick={() => {
        setArticle({title: 'Blog', object: {}})
        }}>Return to Blog List</button>
        </div>
)}