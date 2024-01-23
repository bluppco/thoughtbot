const HeaderItemJSX = ( props ) =>{

    const { href } = props

    return(
        <li className="font-calibre">
            <a href={ href }>
                { props.children }
            </a>
        </li>

    )

}

export default HeaderItemJSX
