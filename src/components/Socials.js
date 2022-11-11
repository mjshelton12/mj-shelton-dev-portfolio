import { socialData } from '../data/socialData';

export default function Social({ media }) {
   const socials = socialData.map((media) => {
         return (<li key = {media.id}>
        <a href={media.src} target={media.target}>
        <img src={media.img} alt={media.alt} />
    </a>
    </li>)})

    return(
       <>
        {socials}
       </>
)}
