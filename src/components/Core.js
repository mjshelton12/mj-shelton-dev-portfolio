import Projects from "./Projects"
import Contact from "./Contact"

export default function Core({current}) {
    // const content = page.map((option) => <Pages key={option.id} page={option}/>)
    function displayComponent(){
        switch(current){
            case'About':
            return (<h1>this is the about</h1>)
            
            case'Work':
            return (<h1>this is the Work</h1>)
           
            case'Technical Projects':
            return (<Projects/>)

            case'Contact':
            return (<Contact />)
           
            case'Technical Projects':
            return (<Projects/>)
           
            default:
               return (<h1>this is the Contact</h1>)
        }
    }

    return(
        <section className="container" >
            <div className="core">
                {displayComponent()}
            </div>
        </section>
)}