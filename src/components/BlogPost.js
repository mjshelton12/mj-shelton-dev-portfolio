var parse = require('html-react-parser')

export default function BlogPost({setArticle, article}) {
    var blog = parse(article.object.blog)

    return(
        <div>
            <p>{article.object.title}</p>
            <div>
                <p>{blog}</p>
            </div>
            <button href="#" onClick={() => {
        setArticle({title: 'Blog', object: {}})
        }}>Return to Blog List</button>
        </div>
)}