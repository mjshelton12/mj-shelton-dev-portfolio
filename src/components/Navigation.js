import Socials from './Socials'

export default function Navigation({social}) {
    const socials = social.map((media) => <Socials key={media.id} media={media}/>)
    return (
      <>
        <section className="nav-bar">
            <div className="page-nav">
                <ul>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#tech">Technical Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="socials">
                <ul>{socials}</ul>
            </div>
        </section>
      </>
    );
  }
  