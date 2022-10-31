import { aboutData } from '../data/aboutData'

export default function About() {
    return(
        <div className="about">
                <div>
                    <p>{aboutData.description}</p>
                    <img id="about" src={aboutData.img} alt={aboutData.alt} />
                </div>
        </div>
)}