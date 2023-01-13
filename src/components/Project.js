export default function Project({ project }) {
  return (
    <>
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
            <div class="font-bold sm:text-xl text-sm mb-2 text-center sm:text-left">{project.title}</div>
            <div className="sm:flex">
              <a href={project.site} target="blank">
                <button className="bg-gray-400 text-xs sm:text-base hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-1">
                  Live Site
                </button>
              </a>
              <a href={project.repo} target="blank">
                <img
                  className="github hover:bg-blue-300"
                  src="https://i.imgur.com/RQf6YHc.jpg"
                  alt={project.title}
                />
              </a>
            </div>
            <p className="hidden sm:flex mt-2">{project.description}</p>
            <p className="text-sm mt-2 text-center sm:text-left">
              <b className="text-gray-800 font-semibold">Technology Used:</b>{" "}
              {project.tech}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
