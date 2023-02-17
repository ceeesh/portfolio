import tempLogo from '../../assets/images/night-mode.png'
import menu from '../../assets/images/menu.png'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-mainBg">
            <div className="flex justify-between py-8 px-5">
                <div>
                    <a className="flex gap-3" href='#'>
                        <img className='w-7' src={tempLogo} />
                        <h2 className="font-bold text-lg tracking-wider">Cee</h2>
                    </a>
                </div>
                <button className=''>
                    <img className="w-7" src={menu}/>
                </button>
            </div>
        </header>
    )
}

export default Header