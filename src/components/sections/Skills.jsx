import SkillsCard from '../SkillsCard'
import { skillStack } from '../../data/data'


const Skills = () => {
    return (
        <section className="w-full min-h-screen flex flex-col mb-20">
            <div className="w-full mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mainTxt">Skills</h2>
                <p className="text-lg">Technologies and tools that I use in building websites.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
            {skillStack.map((skill, indx) => (
                <SkillsCard key={indx} title={skill.title} logo={skill.logo}/>
            ))}
            </div>
        </section>
    )
}

export default Skills
