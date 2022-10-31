export default function Pages({ page, setCurrent, current }) {

    return(
        <li>
            <a href="#" onClick={()=>setCurrent(page.title)} className={current===page.title ? "selected" : "not-selected"} >{page.title}</a>
        </li>
)}