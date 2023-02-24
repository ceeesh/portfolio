import React from 'react'
import About from '../components/sections/About'

const AboutPage = () => {
    return (
        <div className="w-full mx-auto px-5 max-w-6xl md:px-10 lg:px-12 xl:px-0 z-50">
            <About pTop={true} />
        </div>
    )
}

export default AboutPage