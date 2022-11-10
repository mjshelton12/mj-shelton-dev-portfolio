import About from "./About"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import BlogPost from "./BlogPost"
import Resume from "./Resume"


export default function Core({setCurrent, current}) {
    function displayComponent(){
        switch(current){
            case'About':
            return (<About/>)
            
            case'Portfolio':
            return (<Portfolio />)

            case'Blog':
            return (<Blog setCurrent={setCurrent} current={current}/>)

            case'BlogPost':
            return (<BlogPost setCurrent={setCurrent} />)

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