import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import HeaderItemJSX from "./HeaderItem"
import ContainerJSX from "../../layouts/Container"

const HeaderMobile = ( props ) => {

    const { env } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ env === "staging" ? "top-12" : "top-0" } md:hidden fixed z-30 w-full bg-white`}>
            <ContainerJSX>
                <nav className="py-4">
                    <div className="flex justify-between items-center z-30 relative h-12">
                        <a href="/">
                            <div className="w-10 aspect-square">
                                <img
                                    src="/logos/logo.svg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </a>
                        <div className="flex gap-6 items-center">
                            {/*<p className="font-calibre text-thoughtbot_slate">Let's Talk</p>*/}
                            <div onClick={ () => updateOpen( !isOpen ) }>
                                {

                                    isOpen &&
                                    <img
                                        src="/icons/close.svg"
                                        className="w-8 aspect-square"
                                    />

                                }
                                {

                                    !isOpen &&
                                    <img
                                        src="/icons/menu.svg"
                                        className="w-8 aspect-square"
                                    />

                                }
                            </div>
                        </div>
                    </div>
                    <AnimatePresence initial={ false }>
                        {

                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate={ isOpen ? "open" : "collapsed" }
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "100vh" },
                                    collapsed: { opacity: 0, height: "0px" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="grow"
                            >
                                <div className="flex items-center justify-center h-full z-10">
                                    <ul className="flex flex-col gap-6 text-center">
                                        <HeaderItemJSX href="/services">Services</HeaderItemJSX>
                                        <HeaderItemJSX href="/case-studies">Case Studies</HeaderItemJSX>
                                        <HeaderItemJSX href="/resources">Resources</HeaderItemJSX>
                                        <HeaderItemJSX href="/hire-us">Let's Talk</HeaderItemJSX>
                                        {/*<HeaderItemJSX>Celebrating 20 Years 🎉</HeaderItemJSX>*/}
                                    </ul>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </nav>
            </ContainerJSX>
        </header>
    )

}

export default HeaderMobile
