export default function Pages({ page }) {
    return(
        <li>
            <a href={page.src} target={page}>{page.title}</a>
        </li>
)}