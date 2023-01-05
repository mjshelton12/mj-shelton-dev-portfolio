import { aboutData } from '../data/aboutData'

export default function About() {
    return(
        <div className="">
                <div className="flex-none sm:flex sm:row">
                    <div><p className="aboutPara" >{aboutData.description}</p></div>
                    <div classNmae="justify-center"><img id="about" src={aboutData.img} alt={aboutData.alt} /></div>
                </div>
        </div>
)}