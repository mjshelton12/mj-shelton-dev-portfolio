import Socials from './Socials'

export default function Footer() {
    return (
        <section className="footer">
            <div className="absolute bottom-6 social-footer second bg-cyan-300">
                <ul className="socials"><Socials /></ul>
            </div>
            <div className="absolute bottom-0 bg-cyan-300">
                <p>Made in 2022 with ReactJS by MJ Shelton</p>
            </div>
        </section>
    );
  }