import React from 'react'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'

const Main = () => {
    return (
        <main className="w-full mx-auto px-5 max-w-6xl md:px-10 lg:px-12 xl:px-0 z-20">
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default Main