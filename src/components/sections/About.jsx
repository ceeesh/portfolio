import React from 'react'

const About = () => {
    return (
        <section className="w-full min-h-screen flex flex-col">
            <h2 className="text-4xl font-bold mb-8 text-mainTxt">About</h2>
            <div>
                <div className="flex flex-col space-y-4 text-justify">
                    <h3 className="text-1xl text-secondaryTxt">Hi. I'm Cee Jay.</h3>
                    <p>I am a Front-End Developer who loves to apply his knowledge 
                        to solve problems, create powerful products and impact businesses/lives. 
                        I am naturally curios and always trying to improve my skills.
                    </p>

                    <p>Focused on exploring the field, and seeking opportunities that will 
                        help in growth and upgrading skills, especially on building profitable 
                        responsive websites and web applications for businesses and entities.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About