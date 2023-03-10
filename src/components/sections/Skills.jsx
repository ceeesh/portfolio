import SkillsCard from '../SkillsCard'
import { skillStack } from '../../data/data'
import { motion } from "framer-motion"
import { useState } from 'react';
import { useThemeMode } from "react-theme-mode"


const Skills = ({ pTop }) => {
    const [isInView, setIsInView] = useState(false);
    const [theme] = useThemeMode()
    return (
        <motion.section
            whileInView={() => {
                setIsInView(true);
                return {};
            }}
            initial={{ opacity: 0, y: 100, }}
            animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}
            className={`w-full min-h-screen flex flex-col justify-center ${pTop ? `pt-[120px] mb-0 pb-[260px]` : 'mb-20'}`}>
            <div className="w-full mb-12">
                <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-4xl lg:text-7xl font-bold mb-4`}>Skills</h2>
                <p className="text-lg">These are the technology stacks in which I am most interested in developing innovative projects and learning more.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
                {skillStack.map((skill, indx) => (
                    <SkillsCard key={indx} title={skill.title} logo={skill.logo} />
                ))}
            </div>
        </motion.section>
    )
}

export default Skills
