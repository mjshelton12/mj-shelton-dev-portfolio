export default function Social({ media }) {
    return(
        <li>
            <a href={media.src} target={media.target}>
            <img src={media.img} alt={media.alt} />
        </a>
        </li>
)}
