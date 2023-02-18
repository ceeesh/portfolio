import React from 'react'

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
                    <a href={project.githubRepo}>
                        <svg stroke="#EFD09E" fill="none" stroke-width="2"
                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 
                    6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 
                    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 
                    5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path></svg></a>
                </li>
                <li>
                    <a>
                        <svg stroke="#EFD09E" fill="none" stroke-width="0"
                            viewBox="0 0 24 24" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 
                    4h6m0 0v6m0-6L10 14"></path></svg></a></li>
            </ul>
        </div>
    )
}

export default ProjectsCard