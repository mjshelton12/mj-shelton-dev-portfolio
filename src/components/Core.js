import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"


export default function Core({current}) {
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Portfolio':
            return (<Portfolio />)

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