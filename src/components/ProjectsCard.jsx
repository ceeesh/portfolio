import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectsCard = ({ project }) => {
    return (
        <div className="bg-btnbg flex flex-col rounded-lg text-center w-full p-5 shadow">
            <div className="mb-4 md:mb-6">
                <p className="font-thin text-secondaryTxt">Featured Project</p>
                <a className="text-xl font-bold text-mainTxt" href={project.liveUrl} target="_blank">{project.title}</a>
            </div>
            <p className="text-sm mb-4 text-secondaryTxt">{project.description}</p>
            <ul className="flex items-center justify-center text-sm space-x-2 flex-wrap mb-6">
                {project.stackTech.map((tech, indx) => (
                    <li className="text-mainTxt" key={indx}>{tech}</li>
                ))}
            </ul>
            <ul className="flex items-center justify-center gap-4 text-sm">
                <li>
                    <a  className="text-mainTxt" href={project.githubRepo}>
                        <IoLogoGithub size={23} />
                    </a>
                </li>
                <li>
                    <a className="text-mainTxt" >
                        <HiOutlineExternalLink size={23} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectsCard