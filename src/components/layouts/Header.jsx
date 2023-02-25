import tempLogo from '../../assets/images/night-mode.png'
import menu from '../../assets/images/menu.png'
import close from '../../assets/images/close.png'
import { navLinks } from '../../data/data'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
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

                <div className="flex justify-between py-8 px-5 z-40">
                    <motion.div
                        variants={bounceIn(-550, 'spring', 1, 0.3)}
                        initial="offscreen"
                        animate="onscreen"
                    >
                        <Link to='/' className="flex gap-3">
                            <img className='w-7' src={tempLogo} />
                            <h2 className="font-bold text-lg tracking-wider text-mainTxt">Cee</h2>
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
                                if (nav.cName === 'lightMode') {
                                    return <li key={indx} className="cursor-pointer"><img src={nav.url} /></li>
                                }
                                return <Link to={nav.url} key={indx} className="text-mainTxt">{nav.title}</Link>
                            })}
                        </ul>
                    </motion.nav>
                </div>

                <div className={`${navOpen ? 'flex' : 'hidden'} top-0 absolute left-0 right-0 h-screen z-[-20] bg-mainBg`}>
                    <nav className="mx-auto px-5 w-full h-full flex">
                        <ul className="flex flex-col items-center justify-center gap-6 w-full text-xl">
                            {navLinks.map((nav, indx) => (
                                <Link to={nav.url} onClick={openNav} key={indx}><li className="text-mainTxt">{nav.title}</li></Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            {children}
        </>
    )
}

export default Header
