import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useThemeMode } from 'react-theme-mode'

const ProjectsCard = ({ project, card }) => {
    const [theme] = useThemeMode()
    return (
        <div className={`${card ? 'card card2' : ''} ${theme === 'dark' ? 'bg-white bg-opacity-5' : 'bg-black bg-opacity-100' }  grid 
        rounded-lg text-center w-full p-5 shadow-5xl border border-r-0 
        border-b-0 border-opacity-30 transition-all`}>
                <div className="mb-4 md:mb-6">
                    <p className="font-thin text-secondaryTxt">Featured Project</p>
                    <a className={`text-mainTxt text-xl font-bold`} href={project.liveUrl} target="_blank">{project.title}</a>
                </div>
                <p className="text-sm mb-4 text-secondaryTxt">{project.description}</p>
                <ul className="flex items-center justify-center text-sm space-x-2 flex-wrap mb-6">
                    {project.stackTech.map((tech, indx) => (
                        <li className="text-mainTxt" key={indx}>{tech}</li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center gap-4 text-sm">
                    <li>
                        <a className="text-mainTxt" href={project.githubRepo} target="_blank">
                            <IoLogoGithub size={23} />
                        </a>
                    </li>
                    <li>
                        <a className="text-mainTxt" href={project.liveUrl} target="_blank">
                            <HiOutlineExternalLink size={23} />
                        </a>
                    </li>
                </ul>
        </div>
    )
}

export default ProjectsCard
