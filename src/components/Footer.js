import Socials from './Socials'

export default function Footer({social, page}) {
    const socials = social.map((media) => <Socials key={media.id} media={media}/>)
    return (
        <section>
            <div className="social-footer second">
                <ul className="socials">{socials}</ul>
            </div>
        </section>
    );
  }