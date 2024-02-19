// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const Li = ( props ) =>{

    const { href } = props

    return(
        <li className="font-calibre">
            <Link href={ href } aria_label="">
                { props.children }
            </Link>
        </li>

    )

}

export default Li
