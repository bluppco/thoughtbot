import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ButtonJSX from "../../atoms/jsx/Button"

const HeaderMobile = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-white px-6 py-6 fixed z-30 w-full border-b border-thoughtbot_red">
            <div className="flex justify-center items-center z-30 relative h-10">
                <a href="/">
                    <img
                        src="/logos/logo.png"
                        alt=""
                        className="w-20 object-cover"
                    />
                </a>
                <div onClick={ () => updateOpen( !isOpen ) } className="absolute left-0">
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
                <div className="absolute right-0">
                <ButtonJSX>123</ButtonJSX>
                </div>
            </div>
            <AnimatePresence initial={false}>
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
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8 text-xl text-center">

                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
