import About from "./About"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Resume from "./Resume"


export default function Core({ current }) {
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Portfolio':
            return (<Portfolio />)

            case'Blog':
            return (<Blog />)

            case'Resume/Contact':
            return (<Resume/>)

            default:
               return (<About/>)
        }
    }

    return(
        <section className="flex justify-center mx-auto relative" >
            <div className="innercore justify-center sm:grid place-items-center overflow-scroll">
                {displayComponent()}
            </div>
        </section>
)}