var parse = require('html-react-parser')

export default function BlogPost({setArticle, article}) {
    var blog = parse(article.object.blog)

    return(
        <div className="blog-post">
            <p className="blog-title">{article.object.title}</p>
            <div className="blog-content">
                <p>{blog}</p>
            </div>
            <button href="#" onClick={() => {
        setArticle({title: 'Blog', object: {}})
        }}>Return to Blog List</button>
        </div>
)}