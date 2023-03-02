import { useState } from 'react'
import MainProjectCards from '../components/MainProjectCards'
import ProjectsCard from '../components/ProjectsCard'
import { projects } from '../data/data'
import { motion } from "framer-motion"
import { useThemeMode } from "react-theme-mode"

const ProjectsPage = () => {
  const [isInView, setIsInView] = useState(false);
  const [theme] = useThemeMode()

  return (
    <div className="w-full mx-auto px-5 max-w-7xl md:px-10 lg:px-12 xl:px-0 z-50 pt-36 lg:flex flex-col gap-16 mb-12">
      <section className="min-h-screen pb-12">
        <div className="mb-12 ">
          <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-4xl lg:text-5xl font-bold mb-4`}>Projects</h2>
          <p className="text-1xl"> Check out all the projects that I made with <span className={`text-2xl ${theme === 'dark' ? 'text-secondaryTxt': 'text-black'} `}>&hearts;</span></p>
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
            return {};
          }}
          initial={{ opacity: 0, y: 100, }}
          animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}
          className="hidden sm:grid grid-cols-1 gap-6 mb-8 mx-6 sm:mx-12 md:mx-20 lg:mx-32">
          {projects.map((project, indx) => (
            <MainProjectCards project={project} key={indx} card={true} />
          ))}
        </motion.div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
            return {};
          }}
          initial={{ opacity: 0, y: 100, }}
          animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}
          className="sm:hidden grid grid-cols-1 gap-6 mb-8 mx-6 sm:mx-12 md:mx-20 lg:mx-32">
          {projects.map((project, indx) => (
            <ProjectsCard project={project} key={indx} />
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default ProjectsPage


{/* <Project pTop={true} /> */ }