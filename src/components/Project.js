export default function Project({ project }) {
  return (
    <div
      className="project-box"
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundSize: `cover`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="project-info">
        <div className="project-details">{project.title}</div>
        <a className="project-details" href={project.repo} target="blank">
          <img src="https://i.imgur.com/RQf6YHc.jpg" alt={project.title} />
        </a>
        <a className="project-details" href={project.site} target="blank">
          Live Site
        </a>
        <p className="project-details">{project.description}</p>
        <p className="project-details project-tech">Technology Used: {project.tech}</p>
      </div>
    </div>
  );
}
