export default function Project({ project }) {
  return (
    <>
      {/* <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
        <a href={project.site} target="blank">
          <img
            class="w-full"
            src={project.img}
            alt={project.title}
            style={{ objectFit: "cover", height: "225px" }}
          />{" "}
        </a>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{project.title}</div>
          <div className="flex">
            <button
              className="bg-gray-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
              href={project.site}
              target="blank"
            >
              Live Site
            </button>
            <a href={project.repo} target="blank">
              <img
                className="github hover:bg-blue-400"
                src="https://i.imgur.com/RQf6YHc.jpg"
                alt={project.title}
              />
            </a>
          </div>
          <p>{project.description}</p>
          <p className="text-sm mt-2">
            <b className="text-gray-700 font-semibold">Technology Used:</b>{" "}
            {project.tech}
          </p>
        </div>
      </div> */}
      <div
      className="project-box m-2"
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundSize: `cover`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="project-info text-left">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{project.title}</div>
          <div className="flex">
            <button
              className="bg-gray-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
              href={project.site}
              target="blank"
            >
              Live Site
            </button>
            <a href={project.repo} target="blank">
              <img
                className="github hover:bg-blue-400"
                src="https://i.imgur.com/RQf6YHc.jpg"
                alt={project.title}
              />
            </a>
          </div>
          <p className="mt-2">{project.description}</p>
          <p className="text-sm mt-2">
            <b className="text-gray-700 font-semibold">Technology Used:</b>{" "}
            {project.tech}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
