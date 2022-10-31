export default function Projects({ page }) {
    return(
        <li>
            <a href={page.src} target={page}>{page.title}</a>
        </li>
)}