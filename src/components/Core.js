import About from "./About"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Resume from "./Resume"


export default function Core({current}) {
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Portfolio':
            return (<Portfolio />)

            case'Blog':
            return (<Blog />)

            case'Contact/Resumé':
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