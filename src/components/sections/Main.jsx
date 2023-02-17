import React from 'react'
import About from './About'
import Intro from './Intro'
import Skills from './Skills'

const Main = () => {
    return (
        <main className="w-full mx-auto px-5">
            <Intro />
            <About />
            <Skills />
        </main>
    )
}

export default Main