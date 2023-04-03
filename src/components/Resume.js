import { resumeData } from "../data/resumeData";

export default function Resume() {
  return (
    <div className="resume text-lg mb-32 mt-10 lg:mt-0 lg:mb-0" data-aos="fade">
      <div>
        <a className='download' href={resumeData.download}>
          <p className="text-2xl">Click to Download MJ Shelton's Resume</p>
          <img src={resumeData.img} alt={resumeData.alt} />
        </a>
      </div>
      <div className="email">
        <p className="text-2xl">Click to Send MJ an Email:</p>
        <a
          href="mailto:inquiries.mjshelton@gmail.com"
          target="blank"
        >
          <img src="https://imgur.com/y9pUlMt.jpg" alt="Email Logo" />
        </a>
      </div>
      <div className="skills flex">
        <div className="flex-row">
        <p className="text-2xl">MJ's Technical Skills</p>
        <p className="text-lg">Languages: {resumeData.languages}</p>
        <br />
        <p className="text-lg">Backend: {resumeData.backend}</p>
        <br />
        <p className="text-lg">Frontend: {resumeData.frontend}</p>
        <br />
        <p className="text-lg">Other: {resumeData.other}</p>
        </div>
      </div>
    </div>
  );
}
