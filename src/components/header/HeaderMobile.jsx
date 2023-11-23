import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import HeaderItemJSX from "./HeaderItem"

const HeaderMobile = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden px-6 py-4 fixed z-30 w-full bg-white">
            <div className="flex justify-between items-center z-30 relative h-10">
                <a href="/">
                <div className="w-48 aspect-[4/1]">
                    <img
                        src="/logos/logo.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                </a>
                <div className="flex gap-2 items-center">
                    <p className="font-calibre text-thoughtbot_slate">Let's talk</p>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <img
                                src="/icons/close.svg"
                                className="w-6 aspect-square"
                            />

                        }
                        {

                            !isOpen &&
                            <img
                                src="/icons/menu.svg"
                                className="w-6 aspect-square"
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
                            open: { opacity: 1, height: "240px" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="h-full z-10 pt-10">
                            <ul className="flex flex-col gap-6 text-center">
                                <HeaderItemJSX>Services</HeaderItemJSX>
                                <HeaderItemJSX>Case Studies</HeaderItemJSX>
                                <HeaderItemJSX>Resources</HeaderItemJSX>
                                <HeaderItemJSX>Celebrating 20 Years 🎉</HeaderItemJSX>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
