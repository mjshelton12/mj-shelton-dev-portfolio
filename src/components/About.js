import { aboutData } from '../data/aboutData'

export default function About() {
    return(
        <div className="about" data-aos="fade">
                <div className="flex sm:row content-center items-center">
                    <div className="flex items-center"><p className="aboutPara text-sm leading-snug">{aboutData.description}</p></div>
                    <div className="flex items-center"><img id="about" src={aboutData.img} alt={aboutData.alt} /></div>
                </div>
        </div>
)}