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

            case'Contact/Resumé':
            return (<Resume/>)

            default:
               return (<About/>)
        }
    }

    return(
        <section className="sm:container mx-auto sm:mt-60 lg:mt-5 sm:relative" >
            <div className="flex justify-center sm:grid core place-items-center">
                {displayComponent()}
            </div>
        </section>
)}