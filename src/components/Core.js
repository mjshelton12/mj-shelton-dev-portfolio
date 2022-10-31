import About from "./About"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"
import Resume from "./Resume"


export default function Core({current}) {
    // const content = page.map((option) => <Pages key={option.id} page={option}/>)
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Work':
            return (<h1>this is the Work</h1>)
           
            case'Technical Projects':
            return (<Projects/>)

            case'Contact':
            return (<Contact />)

            case'Resume':
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