import React from 'react'

const About = () => {
    return (
        <section className="w-full min-h-screen flex flex-col">
            <h2 className="text-4xl font-bold text-primary mb-8">About</h2>
            <div>
                <div className="flex flex-col space-y-4 text-justify">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Iure pariatur ipsam minima animi vel, reiciendis repellat porro repellendus fugit
                    </p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Iure pariatur ipsam minima animi vel, reiciendis repellat porro repellendus fugit
                        accusantium? Sit deleniti sint itaque animi natus blanditiis ea et accusamus.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About