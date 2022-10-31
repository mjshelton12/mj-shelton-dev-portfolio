import { resumeData } from '../data/resumeData'

export default function Resume() {
    return(
        <div className="resume">
                <div>
                   <a href={resumeData.download}><h2>Click to Download MJ Shelton's Resume</h2>
                    <img id="about" src={resumeData.img} alt={resumeData.alt} /></a> 
                </div>
                <div className="skills">
                    <h2>Technical Skills</h2>
                    <p>Languages: {resumeData.languages}</p>
                    <p>Frontend: {resumeData.frontend}</p>
                    <p>Backend: {resumeData.backend}</p>
                </div>
        </div>
)}