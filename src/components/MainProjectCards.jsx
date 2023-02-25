import { IoLogoGithub } from 'react-icons/io5'
import { HiOutlineExternalLink } from "react-icons/hi";

const MainProjectCards = ({ project }) => {
    return (
        <div className="project_card relative p-8 w-full grid grid-cols-2 gap-4 overflow-hidden border-2 border-solid border-brdrC rounded-3xl opacity-100 z-50">
            <div className="max-h-[500px] overflow-hidden opacity-100 z-10">
                <span>
                    <img className="w-full opacity-100 z-10" src={project.img} />
                </span>
            </div>
            <div className="opacity-100 flex flex-col justify-end gap-8 ">
                <h2 className="text-4xl text-white z-10">{project.title}</h2>
                <p className="text-lg font-thin text-white z-10" >{project.description}</p>
                <div className="mb-8 flex w-full gap-4 z-10">
                    <a className="max-w-[300px] py-4 px-8 flex 
                    items-center justify-center bg-[#e5e7eb] 
                    text-[#1e293b] rounded-full gap-2 z-10 cursor-pointer"
                    href={project.liveUrl}
                    target="_blank">
                        <i>
                            <HiOutlineExternalLink size={23} />
                        </i>
                        Preview Link
                    </a>
                    <a className="max-w-[300px] py-1 px-8 flex 
                    items-center justify-center bg-[#e5e7eb] 
                    text-[#1e293b] rounded-full gap-2 z-10 cursor-pointer"
                    href={project.githubRepo}
                    target="_blank">
                        <i>
                            <IoLogoGithub size={23} />
                        </i>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainProjectCards