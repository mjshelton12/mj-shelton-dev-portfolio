import { aboutData } from '../data/aboutData'

export default function About() {
    return(
        <div className="about mb-32 lg:mb-0" data-aos="fade">
                <div className="flex sm:row content-center items-center">
                    <div className="flex items-center"><p className="aboutPara text-sm leading-snug">Michelle "MJ" Shelton started her career in television production offices where she <strong>led teams on multi-million dollar projects</strong> with such household names as <strong>Netflix, Apple,</strong> and <strong>Disney.</strong> Thanks to creative problem solving (and a little Googling), MJ found herself frequently responsible for <strong>IT management</strong> including IT purchases, set-up of network and digital filing systems, and in-house tech-support. After realizing this skill had developed into a passion, MJ enrolled in the <strong> Northwestern Coding Bootcamp</strong>  so she could take her technical skills to a new level across industries. Friendly, driven, and a creative problem-solver, MJ loves to be a part of a team working hard to create an efficient, effective project.</p></div>
                    <div className="flex items-center"><img id="about" src={aboutData.img} alt={aboutData.alt} /></div>
                </div>
        </div>
)}