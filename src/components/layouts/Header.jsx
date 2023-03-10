import menu from '../../assets/images/menu.png'
import menuLight from '../../assets/images/menu-light.png'
import close from '../../assets/images/close.png'
import closeLight from '../../assets/images/close-light.png'
import cm from '../../assets/images/c.png'
import cmb from '../../assets/images/c-black.png'
import lightMode from '../../assets/images/sun.png'
import darkMode from '../../assets/images/night.png'
import { navLinks } from '../../data/data'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { bounceIn } from '../../utils/framerMotion'
import { useThemeMode } from 'react-theme-mode'

const Header = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)
    const body = document.querySelector('body')
    const [theme, setTheme] = useThemeMode()

    const openNav = () => {
        setNavOpen(prevState => !prevState)
    }

    if(theme === 'dark'){
        body.classList.add('bodyDark')
        body.classList.remove('bodyLight')
    }else {
        body.classList.remove('bodyDark')
        body.classList.add('bodyLight')
    }

    !navOpen ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')
   

    return (
        <>
            <header className={`${theme === 'dark' ? `bg-mainBg` : `bg-white`} 
            fixed top-0 left-0 right-0 bg-mainBg z-50 w-full mx-auto px-5  md:px-10 lg:px-12 xl:px-0`}>

                <div className="flex justify-between py-8 px-5 z-40 ">
                    <motion.div
                        variants={bounceIn(-550, 'spring', 1, 0.3)}
                        initial="offscreen"
                        animate="onscreen"
                    >
                        <Link to='/' className="flex gap-3 ">
                            <img className='w-8 h-full' src={theme === 'dark' ? cm : cmb } />
                            <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'}
                            font-bold text-lg tracking-wider hover:text-gray-700 
                                hover:-translate-y-1 transition-all duration-300 delay-75 `}>Cee</h2>
                        </Link>
                    </motion.div>
                    <motion.button
                        variants={bounceIn(95, 'spring', 1, 0.4)}
                        initial="offscreen"
                        animate="onscreen"
                        className="md:hidden" onClick={openNav}>
                        <img className={`${navOpen ? 'w-5' : 'w-7'} `} src={navOpen && theme === 'dark' ? close : navOpen && theme === 'light' ? closeLight : 
                        theme === 'light' ? menuLight : menu} />
                    </motion.button>
                    <motion.nav
                        variants={bounceIn(850, 'spring', 1, 0.3)}
                        initial="offscreen"
                        animate="onscreen"
                        className="hidden md:block">
                        <ul className="flex items-center justify-center w-full text-lg gap-6">
                            {navLinks.map((nav, indx) => {
                                if (nav.type === 'lightMode') {
                                    return <li key={indx} className="cursor-pointer hover:-translate-y-1 transition-all duration-300 delay-75">
                                        <img src={theme === 'dark' ? lightMode : darkMode}
                                            onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')} />
                                    </li>
                                }
                                return <Link to={nav.url} key={indx} className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} hover:text-gray-700 
                                hover:-translate-y-1 transition-all duration-300 delay-75`}>{nav.title}</Link>
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
                            className={`${navOpen ? 'flex' : 'hidden'} ${theme === 'dark' ? 'bg-mainBg' : 'bg-white'} top-0 absolute left-0 right-0 h-screen z-[-20] `}>
                            <nav className="mx-auto px-5 w-full h-full flex">
                                <ul className="flex flex-col items-center justify-center gap-6 w-full text-xl">
                                    {navLinks.map((nav, indx) => (
                                        <Link to={nav.url} onClick={openNav} key={indx}>
                                            <li className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'}  hover:text-gray-700 
         hover:-translate-y-1 transition-all duration-300 delay-75`}>{nav.title}
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
