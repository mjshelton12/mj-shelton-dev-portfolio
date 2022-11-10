import Socials from './Socials'

export default function Footer() {
    return (
        <section className="footer">
            <div className="social-footer second">
                <ul className="socials"><Socials /></ul>
            </div>
            <div>
                <p>Made in 2022 with ReactJS by MJ Shelton</p>
            </div>
        </section>
    );
  }