import tempLogo from '../../assets/images/night-mode.png'
import menu from '../../assets/images/menu.png'
import close from '../../assets/images/close.png'
import { navLinks } from '../../data/data'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = ({children}) => {
    const [navOpen, setNavOpen] = useState(false)
    const body = document.querySelector('body')

    const openNav = () => {
        setNavOpen(prevState => !prevState)
    }

    !navOpen ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')

    return (
        <>
        <header className="fixed top-0 left-0 right-0 bg-mainBg z-50">
            <div className="flex justify-between py-8 px-5 z-40">
                <div>
                    <Link to='/' className="flex gap-3">
                        <img className='w-7' src={tempLogo} />
                        <h2 className="font-bold text-lg tracking-wider text-mainTxt">Cee</h2>
                    </Link>
                </div>
                <button className="md:hidden" onClick={openNav}>
                    <img className={`${navOpen ? 'w-5' : 'w-7'} `} src={navOpen ? close : menu} />
                </button>
                <nav className="hidden md:block">
                    <ul className="flex items-center justify-center w-full text-lg gap-6">
                        {navLinks.map((nav, indx) => {
                            if(nav.cName === 'nav_resume'){
                                return <li key={indx} className="text-mainTxt bg-red border-[0.1rem] py-2 px-6 rounded-md bg-btnbg"><a href="#">{nav.title}</a></li>
                            }
                            return <Link to={nav.url} key={indx} className="text-mainTxt">{nav.title}</Link>
                        })}
                    </ul>
                </nav>
            </div>

            <div className={`${navOpen ? 'flex' : 'hidden'} top-0 absolute left-0 right-0 h-screen z-[-20] bg-mainBg`}>
                <nav className="mx-auto px-5 w-full h-full flex">
                    <ul className="flex flex-col items-center justify-center gap-6 w-full text-xl">
                        {navLinks.map((nav, indx) => (
                            <li key={indx} className="text-mainTxt"><a href="#">{nav.title}</a></li>
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
