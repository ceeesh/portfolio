import { socials } from '../../data/data'
import { useThemeMode } from 'react-theme-mode'

const Navs = () => {
    const [theme, setTheme] = useThemeMode()
    return (
        <div className="fixed bottom-0 left-0 right-0 z-1 w-full hidden xl:block z-0">
            <div className="relative max-w-[1536px] px-5 md:px-10 mx-auto flex items-end justify-between">
                <div className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} flex flex-col items-center justify-center gap-6`}>
                    <ul className="flex flex-col items-center gap-6">
                        {socials.map((soc, indx) => (
                            <li key={indx} className="cursor-pointer"><a href={soc.url} target="_blank">{soc.logo}</a></li>
                        ))}
                    </ul>
                    <div className={`${theme === 'dark' ? 'bg-mainTxt' : 'bg-black'} w-[1px] h-24`}></div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6  w-6">
                    <a className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} rotate-90 text-xs pr-44`}>ceejaymalacas17@gmail.com</a>
                    <div className={`${theme === 'dark' ? 'bg-mainTxt' : 'bg-black'} w-[1px] h-24 `}></div>
                </div>
            </div>
        </div>
    )
}

export default Navs