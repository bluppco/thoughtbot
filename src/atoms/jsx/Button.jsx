const ButtonJSX = ( props ) => {

    const { large, light } = props
    return(
        <div class={` ${ light ? "hover:border-white" : "hover:border-thoughtbot_red" } p-[2px] border-[3px] border-transparent rounded-full group w-fit`}>
        <button class={`${ large ? "py-4 px-8 text-lg" : "py-3 px-6" } ${ light ? "text-thoughtbot_red border-white bg-white" : "text-white bg-thoughtbot_light_red group-hover:bg-thoughtbot_red" } rounded-full`}>
            <slot />
        </button>
    </div>
    )

}

export default ButtonJSX
