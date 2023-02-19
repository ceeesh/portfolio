import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectsCard = ({ project }) => {
    return (
        <div className="bg-zinc-800 flex flex-col rounded-lg text-center w-full p-5">
            <div className="mb-4 md:mb-6">
                <p className="font-thin">Featured Project</p>
                <a className="text-xl font-bold text-[#EFD09E]" href={project.liveUrl} target="_blank">{project.title}</a>
            </div>
            <p className="text-sm mb-4">{project.description}</p>
            <ul className="flex items-center justify-center lg:justify-end text-whiteSecondary text-sm lg:text-base space-x-2 flex-wrap mb-6">
                {project.stackTech.map((tech, indx) => (
                    <li key={indx}>{tech}</li>
                ))}
            </ul>
            <ul className="flex items-center justify-center gap-4 text-sm">
                <li>
                    <a  className="text-[#FBEBD8]" href={project.githubRepo}>
                        <IoLogoGithub size={23} />
                    </a>
                </li>
                <li>
                    <a className="text-[#FBEBD8]" >
                        <HiOutlineExternalLink size={23} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectsCard