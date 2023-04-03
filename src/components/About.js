import { aboutData } from '../data/aboutData'

export default function About() {
    return(
        <div className="about mb-32 lg:mb-0" data-aos="fade">
                <div className="flex sm:row content-center items-center">
                    <div className="flex items-center">
                        <div><p className="aboutPara text-xl md:text-3xl leading-snug">A dedicated <strong>FullStack Engineer</strong> with experience in    <strong>JavaScript, React, Node, Espress, MongoDB, MySQL</strong> and many other technologies.
                        </p>
                        <p className="aboutPara md:text-base leading-snug">Michelle "MJ" Shelton started her career as a Project Manager (PMP) in television production offices where she led teams on <strong>multi-million dollar projects</strong> with such household names as <strong>Netflix, Apple,</strong> and <strong>Disney.</strong> MJ frequently found herself in charge of IT management, from reading error messages in software to setting up networks. After realizing this skill had developed into a passion, MJ enrolled in the <strong> Northwestern Coding Bootcamp</strong> so she could make her technical skills into a career. Friendly, driven, and a creative problem-solver, MJ loves to be a part of a team working hard to create an efficient, effective project.</p>
                        </div>
                    </div>
                    <div className="flex items-center"><img id="about" src={aboutData.img} alt={aboutData.alt} /></div>
                </div>
        </div>
)}