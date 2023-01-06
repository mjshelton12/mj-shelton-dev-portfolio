import { portfolioData } from "../data/portfolioData";
import Project from "./Project";

export default function Portfolio() {
  const list = portfolioData.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <>
      <div data-aos="fade">
        <div className="text-center text-lg italic font-semibold">
          <h2>Scroll Over Projects to See More Info</h2>
        </div>
        <div className="grid grid-cols-3">{list}</div>
      </div>
    </>
  );
}
