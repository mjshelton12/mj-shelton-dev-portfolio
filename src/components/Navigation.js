import { pageData } from '../data/pageData';
import Socials from './Socials'
import Pages from './Pages'

export default function Navigation({setCurrent, current}) {
    const pages = pageData.map((option) => <Pages key={option.id} page={option} setCurrent={setCurrent} current={current}/>)
    return (
      <>
        <section className="nav-bar">
            <div className="social-header">
                <ul className="socials" data-aos="fade"><Socials /></ul>
            </div>
            <div className="page-nav" data-aos="fade">
                <ul>{pages}</ul>
            </div>
        </section>
      </>
    );
  }
  