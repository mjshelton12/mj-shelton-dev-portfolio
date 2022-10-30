export default function Pages({ page }) {
    return(
        <li>
            <a href={page.src} target={page.target}>{page.title}</a>
        </li>
)}