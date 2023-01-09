import { resumeData } from "../data/resumeData";

export default function Resume() {
  return (
    <div className="resume text-lg mb-32 lg:mb-0" data-aos="fade">
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
      <div className="skills">
        <p className="text-2xl">MJ's Technical Skills</p>
        <p className="text-lg">Languages: {resumeData.languages}</p>
        <p className="text-lg">Backend: {resumeData.backend}</p>
        <p className="text-lg">Frontend: {resumeData.frontend}</p>
        <p className="text-lg">Other: {resumeData.other}</p>
      </div>
    </div>
  );
}
