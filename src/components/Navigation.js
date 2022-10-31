import Socials from './Socials'
import Pages from './Pages'

export default function Navigation({social, page}) {
    const pages = page.map((option) => <Pages key={option.id} page={option}/>)
    const socials = social.map((media) => <Socials key={media.id} media={media}/>)
    return (
      <>
        <section className="nav-bar">
            <div className={"social-header, socials"}>
                <ul>{socials}</ul>
            </div>
            <div className="page-nav">
                <ul>{pages}</ul>
            </div>
        </section>
      </>
    );
  }
  