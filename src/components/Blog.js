import { useState } from "react";
import { blogData } from "../data/blogData";
import Post from "./Post";
import BlogPost from "./BlogPost";

export default function Blog() {
  const [article, setArticle] = useState({ display: "Blog", object: {} });
  const list = blogData.map((blog) => (
    <Post key={blog.id} post={blog} setArticle={setArticle} />
  ));

  function displayContent() {
    switch (true) {
      case article.display > 0:
        return <BlogPost setArticle={setArticle} article={article} />;

      case (article.display = "Blog"):
        return (
          <div>
            <div className="text-center text-lg italic font-semibold">
              <h2>Click a Blog to Read</h2>
            </div>
            <div className="grid grid-cols-3 items-stretch">{list}</div>
          </div>
        );

      default:
        return (
          <div>
            <div className="text-center text-lg italic font-semibold">
              <h2>Click a Blog to Read</h2>
            </div>
            <div className="grid grid-cols-3 items-stretch">{list}</div>
          </div>
        );
    }
  }

  return <div data-aos="fade">{displayContent()}</div>;
}
