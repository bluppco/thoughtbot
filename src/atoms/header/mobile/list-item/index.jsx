// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const ListItem = ( props ) =>{

    // PROPS
    const { aria_label, href } = props

    return(
        <li className="font-calibre">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>

    )

}

export default ListItem
