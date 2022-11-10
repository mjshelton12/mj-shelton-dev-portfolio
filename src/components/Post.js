export default function Post({ post }) {
    return (
      <div
        className="project-box"
        style={{
          backgroundImage: `url(${post.img})`,
          backgroundSize: `cover`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="project-info">
          <div className="project-details">{post.title}</div>
          <p className="project-details">{post.description}</p>
        </div>
      </div>
    );
  }
  