import { resumeData } from "../data/resumeData";

export default function Resume() {
  return (
    <div className="resume">
      <div>
        <a className='download' href={resumeData.download}>
          <h2>Click to Download MJ Shelton's Resume</h2>
          <img src={resumeData.img} alt={resumeData.alt} />
        </a>
      </div>
      <div className="email">
        <h2>Click to Send MJ an Email:</h2>
        <a
          href="mailto:inquiries.mjshelton@gmail.com"
          target="blank"
        >
          <img src="https://imgur.com/y9pUlMt.jpg" alt="Email Logo" />
        </a>
      </div>
      <div className="skills">
        <h2>MJ's Technical Skills</h2>
        <p>Languages: {resumeData.languages}</p>
        <p>Backend: {resumeData.backend}</p>
        <p>Frontend: {resumeData.frontend}</p>
      </div>
    </div>
  );
}
