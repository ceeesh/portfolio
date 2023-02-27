import { socials } from '../../data/data'

const Navs = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-1 w-full hidden xl:block z-0">
            <div className="relative max-w-[1536px] px-5 md:px-10 mx-auto flex items-end justify-between">
                <div className="flex flex-col items-center justify-center gap-6 text-mainTxt">
                    <ul className="flex flex-col items-center gap-6">
                        {socials.map((soc, indx) => (
                            <li key={indx} className="cursor-pointer"><a href={soc.url} target="_blank">{soc.logo}</a></li>
                        ))}
                    </ul>
                    <div className="w-[1px] h-24 bg-mainTxt"></div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 text-mainTxt w-6">
                    <a className="rotate-90 text-xs pr-44">ceejaymalacas17@gmail.com</a>
                    <div className="w-[1px] h-24 bg-mainTxt"></div>
                </div>
            </div>
        </div>
    )
}

export default Navs