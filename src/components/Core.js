import About from "./About"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"
import Resume from "./Resume"


export default function Core({current}) {
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Work':
            return (<Work />)
           
            case'Technical Projects':
            return (<Projects/>)

            case'Contact':
            return (<Contact />)

            case'Resumé':
            return (<Resume/>)

            default:
               return (<About/>)
        }
    }

    return(
        <section className="container" >
            <div className="core">
                {displayComponent()}
            </div>
        </section>
)}