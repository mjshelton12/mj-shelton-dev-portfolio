import Socials from './Socials'

export default function Footer() {
    return (
        <section className="footer static bg-white">
            <div className="absolute bottom-5 social-footer second bg-white">
                <ul className="socials"><Socials /></ul>
            </div>
            <div className="absolute bottom-0 bg-white">
                <p>Made in 2022 with ReactJS by MJ Shelton</p>
            </div>
        </section>
    );
  }