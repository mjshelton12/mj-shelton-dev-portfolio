export default function Post({
  post,
  setArticle,
}) {
  return (
    <>
    <a href="#" onClick={() => {
        setArticle({display: post.id, object: post})
        }}>
      <div
        className="blog-box"
        style={{
          backgroundImage: `url(${post.img})`,
          backgroundSize: `cover`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="blog-info">
          <div className="blog-details">{post.title}</div>
          <p className="blog-details">{post.description}</p>
        </div>
      </div>
    </a>
    </>
  );
}
