import tempLogo from '../../assets/images/night-mode.png'
import menu from '../../assets/images/menu.png'
import close from '../../assets/images/close.png'
import cm from '../../assets/images/c.png'
import { navLinks } from '../../data/data'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { bounceIn } from '../../utils/framerMotion'

const Header = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)
    const body = document.querySelector('body')

    const openNav = () => {
        setNavOpen(prevState => !prevState)
    }

    !navOpen ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-mainBg z-50 w-full mx-auto px-5  md:px-10 lg:px-12 xl:px-0">

                <div className="flex justify-between py-8 px-5 z-40 ">
                    <motion.div
                        variants={bounceIn(-550, 'spring', 1, 0.3)}
                        initial="offscreen"
                        animate="onscreen"
                    >
                        <Link to='/' className="flex gap-3 ">
                            <img className='w-8 h-full' src={cm} />
                            <h2 className="font-bold text-lg tracking-wider text-mainTxt hover:text-gray-700 
                                hover:-translate-y-1 transition-all duration-300 delay-75 ">Cee</h2>
                        </Link>
                    </motion.div>
                    <motion.button
                        variants={bounceIn(95, 'spring', 1, 0.4)}
                        initial="offscreen"
                        animate="onscreen"
                        className="md:hidden" onClick={openNav}>
                        <img className={`${navOpen ? 'w-5' : 'w-7'} `} src={navOpen ? close : menu} />
                    </motion.button>
                    <motion.nav
                        variants={bounceIn(850, 'spring', 1, 0.3)}
                        initial="offscreen"
                        animate="onscreen"
                        className="hidden md:block">
                        <ul className="flex items-center justify-center w-full text-lg gap-6">
                            {navLinks.map((nav, indx) => {
                                if (nav.type === 'lightMode') {
                                    return <li key={indx} className="cursor-pointer hover:-translate-y-1 transition-all duration-300 delay-75"><img src={nav.url} /></li>
                                }
                                return <Link to={nav.url} key={indx} className="text-mainTxt hover:text-gray-700 
                                hover:-translate-y-1 transition-all duration-300 delay-75">{nav.title}</Link>
                            })}
                        </ul>
                    </motion.nav>
                </div>

                <AnimatePresence>
                    {navOpen ? (
                        <motion.div
                            initial={{ y: -455, opacity: 0.5, }}
                            animate={{ y: 0, opacity: 1, }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 60 }}
                            exit={{ opacity: 0, y: -455 }}
                            className={`${navOpen ? 'flex' : 'hidden'} top-0 absolute left-0 right-0 h-screen z-[-20] bg-mainBg`}>
                            <nav className="mx-auto px-5 w-full h-full flex">
                                <ul className="flex flex-col items-center justify-center gap-6 w-full text-xl">
                                    {navLinks.map((nav, indx) => (
                                        <Link to={nav.url} onClick={openNav} key={indx}>
                                            <li className="text-mainTxt hover:text-gray-700 
         hover:-translate-y-1 transition-all duration-300 delay-75">{nav.title}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                        </motion.div>
                    ) : null
                    }

                </AnimatePresence>
            </header>

            {children}
        </>
    )
}

export default Header
