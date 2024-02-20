// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import ListItem from "@/atoms/header/mobile/list-item/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = ( props ) => {

    // PROPS
    const { env } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ env === "staging" ? "top-12" : "top-0" } md:hidden fixed z-30 w-full bg-white`}>
            <Container>
                <nav className="py-4">
                    <div className="flex justify-between items-center z-30 relative h-12">
                        <Link href="/" aria_label="thoughbot mobile logo">
                            <div className="w-10 aspect-square">
                                <PictureInternalContain
                                    source="/logos/logo.svg"
                                    alternative_text="thoughbot mobile logo"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-6 items-center">
                            {/*<p className="font-calibre text-thoughtbot_slate">Let's Talk</p>*/}
                            <div onClick={ () => updateOpen( !isOpen ) }>
                                {

                                    isOpen &&
                                    <div className="w-8 aspect-square">
                                        <PictureInternalContain
                                            source="/icons/close.svg"
                                            alternative_text="close icon"
                                        />
                                    </div>

                                }
                                {

                                    !isOpen &&
                                    <div className="w-8 aspect-square">
                                        <PictureInternalContain
                                            source="/icons/menu.svg"
                                            alternative_text="menu icon"
                                        />
                                    </div>

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
                                        <ListItem href="/services" aria_label="Explore Services">Services</ListItem>
                                        <ListItem href="/case-studies" aria_label="Explore Case Studies">Case Studies</ListItem>
                                        <ListItem href="/resources" aria_label="Explore Resources">Resources</ListItem>
                                        <ListItem href="/hire-us" aria_label="Explore Let's Talk">Let's Talk</ListItem>
                                        {/*<ListItem>Celebrating 20 Years 🎉</ListItem>*/}
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
