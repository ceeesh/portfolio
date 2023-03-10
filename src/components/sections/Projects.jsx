import ProjectsCard from "../ProjectsCard";
import { projects } from '../../data/data';
import MainProjectCards from "../MainProjectCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useState } from "react";
import { useThemeMode } from "react-theme-mode"

const Projects = () => {
    const [isInView, setIsInView] = useState(false);
    const [theme] = useThemeMode()
    return (
        <motion.section
            whileInView={() => {
                setIsInView(true);
                return {};
            }}
            initial={{ opacity: 0, y: 100, }}
            animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, type: "spring", stiffness: 50 } }}
            className={`min-h-screen pb-12`}>
            <div className="mb-12">
                <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-4xl lg:text-7xl font-bold mb-4`}>Projects</h2>
                <p className={`text-1xl`}> Check out all the projects that I made with <span className={`text-2xl ${theme === 'dark' ? 'text-secondaryTxt': 'text-black'} `}>&hearts;</span></p>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-8 mx-6 sm:mx-12 md:mx-20 lg:mx-32 lg:hidden">
                {projects.slice(0, 6).map((project, indx) => (
                    <ProjectsCard project={project} key={indx} />
                ))}
            </div>
            <div className="hidden lg:flex flex-col gap-16 mb-12">
                {projects.slice(0, 6).map((project, indx) => (
                    <MainProjectCards project={project} key={indx} />
                ))}
            </div>
            <div className="w-full flex items-center justify-center cursor-pointer">
                <Link to="/projects" className={`${theme === 'dark' ? 'bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr' : 'text-black border-black hover:bg-black hover:text-mainTxt'}
               px-12 py-2.5 text-lg rounded-md border-[0.1rem]
                 font-medium hover:-translate-y-1 transition-all duration-300 delay-75`}> See more</Link>
            </div>
        </motion.section>
    )
}

export default Projects