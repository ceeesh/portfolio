import { motion } from "framer-motion"
import { useState } from "react";

const About = () => {
    const [isInView, setIsInView] = useState(false);
    return (
        <motion.section whileInView={() => {
            setIsInView(true);
            return {};
        }}
            initial={{ opacity: 0, y: 100, }}
            animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}
            className={`w-full min-h-screen flex flex-col justify-center`}>
            <h2 className="text-4xl font-bold mb-8 text-mainTxt lg:text-5xl">About</h2>
            <div>
                <div className="flex flex-col space-y-4 text-justify">
                    <h3

                        className="text-1xl text-secondaryTxt">Hi. I'm Cee Jay.</h3>
                    <p>
                        I am a Front-End Developer who loves to apply his knowledge
                        to solve problems, create powerful products and impact businesses/lives.
                        I am naturally curios and always trying to improve my skills.
                    </p>

                    <p>
                        Focused on exploring the field, and seeking opportunities that will
                        help in growth and upgrading skills, especially on building profitable
                        responsive websites and web applications for businesses and entities.
                    </p>
                </div>
            </div>
        </motion.section>
    )
}

export default About