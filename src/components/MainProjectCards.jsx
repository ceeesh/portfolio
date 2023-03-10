import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from "react-icons/hi";
import { useThemeMode } from "react-theme-mode"

const MainProjectCards = ({ project }) => {
    const [theme] = useThemeMode()

    return (
        <div className={`${theme === 'dark' ? 'project_card border-brdrC' : 'light border-gray-300'}  relative p-8 w-full grid lg:grid-cols-2 gap-4 overflow-hidden border-2 border-solid  rounded-3xl opacity-100`}>
            <div className="max-h-[500px] overflow-hidden opacity-100 z-20">
                <span>
                    <img className="w-full opacity-100 min-h-[150px]" src={project.img} />
                </span>
            </div>
            <div className="opacity-100 flex flex-col justify-end gap-8 z-10">
                <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-4xl`}>{project.title}</h2>
                <p className={`${theme === 'dark' ? 'text-mainTxt' : 'text-gray-800'} text-lg font-thin `}>{project.description}</p>
                <div className="mb-8 flex w-full gap-4 ">
                    <a className={`${theme === 'dark' ? 'text-black bg-[#e5e7eb]' : 'text-mainTxt bg-black'} 
                    max-w-[300px] py-4 px-8 flex lg:py2 lg:px-2 xl:py4 xl:px-8
                    items-center justify-center  
                    text-[#1e293b] rounded-full gap-2 cursor-pointer`}
                        href={project.liveUrl}
                        target="_blank">
                        <i>
                            <HiOutlineExternalLink size={23} color={`${theme === 'dark' ? 'black' : 'white'}`}/>
                        </i>
                        Preview Link
                    </a>
                    <a className={`${theme === 'dark' ? 'text-black bg-[#e5e7eb]' : 'text-mainTxt bg-black'}
                    max-w-[300px] py-4 px-8 flex lg:py2 lg:px-2 xl:py4 xl:px-8 
                    items-center justify-center bg-[#e5e7eb] 
                    text-[#1e293b] rounded-full gap-2 cursor-pointer`}
                        href={project.githubRepo}
                        target="_blank">
                        <i>
                            <IoLogoGithub size={23} colr={`${theme === 'dark' ? 'black' : 'white'}`}/>
                        </i>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainProjectCards