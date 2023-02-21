import ProjectsCard from "../ProjectsCard";
import { projects } from '../../data/data';


const Projects = () => {

    return (
        <section className="min-h-screen">
            <div className="mb-12">
                <h2 className="text-mainTxt text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
                <p className="text-1xl"> Check out all the projects that I made with <span className="text-2xl text-secondaryTxt">&hearts;</span></p>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-8 mx-6 sm:mx-12 md:mx-20 lg:mx-32">
               {projects.map((project, indx) => (
                <ProjectsCard project={project} key={indx}/>
               ))}
            </div>
            <div className="w-full flex items-center justify-center"><a className="bg-btnbg hover:bg-btnHvr px-12 py-2.5 text-lg rounded-md text-mainTxt border-[0.1rem] border-mainTxt font-medium">See more</a></div>
        </section>
    )
}

export default Projects