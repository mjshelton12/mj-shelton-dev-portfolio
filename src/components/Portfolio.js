import { portfolioData } from "../data/portfolioData";
import Project from "./Project";

export default function Portfolio() {
  const list = portfolioData.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <>
      <div className="mb-96" ata-aos="fade">
        <div className="text-center text-lg italic font-semibold">
          <div className="hidden sm:block items-center"><p>Scroll Over or Tap Projects to See More Info</p></div>
          <h2 className="sm:hidden">Tap Projects to See More Info</h2>
        </div>
        <div className="grid grid-cols-3 h-fit">{list}</div>
      </div>
    </>
  );
}
