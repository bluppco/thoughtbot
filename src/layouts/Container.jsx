const ContainerJSX = ( props ) =>{

    return(
        <section class="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1190px] 2xl:max-w-screen-2xl flex flex-col gap-8">
            { props.children }
        </section>

    )

}

export default ContainerJSX
