import { socialData } from '../data/socialData';
import { pageData } from '../data/pageData';
import Socials from './Socials'
import Pages from './Pages'

export default function Navigation({setCurrent, current}) {
    const pages = pageData.map((option) => <Pages key={option.id} page={option} setCurrent={setCurrent} current={current}/>)
    const socials = socialData.map((media) => <Socials key={media.id} media={media}/>)
    return (
      <>
        <section className="nav-bar">
            <div className="social-header">
                <ul className="socials">{socials}</ul>
            </div>
            <div className="page-nav">
                <ul>{pages}</ul>
            </div>
        </section>
      </>
    );
  }
  