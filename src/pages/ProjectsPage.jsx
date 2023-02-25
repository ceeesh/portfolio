import React from 'react'
import MainProjectCards from '../components/MainProjectCards'
import { projects } from '../data/data'

const ProjectsPage = () => {


  return (
    <div className="w-full mx-auto px-5 max-w-7xl md:px-10 lg:px-12 xl:px-0 z-50 pt-36 lg:flex flex-col gap-16 mb-12">
      <section className="min-h-screen pb-12">
        <div className="mb-12 ">
          <h2 className="text-mainTxt text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-1xl"> Check out all the projects that I made with <span className="text-2xl text-secondaryTxt">&hearts;</span></p>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-8 mx-6 sm:mx-12 md:mx-20 lg:mx-32">
          {projects.map((project, indx) => (
            <MainProjectCards project={project} key={indx} card={true}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage


{/* <Project pTop={true} /> */ }