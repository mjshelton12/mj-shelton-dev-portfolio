export default function Project({ project }) {
  return (
      <div
        className="project-box"
        style={{ backgroundImage: `url(${project.img})`, backgroundSize:`cover`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
      >
        <p>{project.title}</p>
        <a href={project.repo} target="blank">
          <img src="https://i.imgur.com/RQf6YHc.jpg" alt={project.title} />
        </a>
        <a href={project.site} target="blank">
          Live Site
        </a>
        <p>{project.description}</p>
        <p>Technology Used: {project.tech}</p>
      </div>
  );
}
