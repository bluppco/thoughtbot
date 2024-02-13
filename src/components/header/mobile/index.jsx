// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import Li from "./li/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const HeaderMobile = ( props ) => {

    const { env } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ env === "staging" ? "top-12" : "top-0" } md:hidden fixed z-30 w-full bg-white`}>
            <Container>
                <nav className="py-4">
                    <div className="flex justify-between items-center z-30 relative h-12">
                        <Link href="/" aria_label="">
                            <div className="w-10 aspect-square">
                                <img
                                    src="/logos/logo.svg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </Link>
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
                                        <Li href="/services">Services</Li>
                                        <Li href="/case-studies">Case Studies</Li>
                                        <Li href="/resources">Resources</Li>
                                        <Li href="/hire-us">Let's Talk</Li>
                                        {/*<Li>Celebrating 20 Years 🎉</Li>*/}
                                    </ul>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </nav>
            </Container>
        </header>
    )

}

export default HeaderMobile
