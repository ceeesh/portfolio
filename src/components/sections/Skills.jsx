import js from '../../assets/images/js.png'
import react from '../../assets/images/react.svg'
import vite from '../../assets/images/vite.svg'
import tailwind from '../../assets/images/tailwind.svg'
import rails from '../../assets/images/rails.png'
import ruby from '../../assets/images/ruby.png'
import node from '../../assets/images/node.png'
import mongo from '../../assets/images/mongo.png'
import resolve from '../../assets/images/resolve.png'
import git from '../../assets/images/git.svg'
import photoshop from '../../assets/images/photoshop.svg'
import wordpress from '../../assets/images/wordpress.png'
import bootstrap from '../../assets/images/bootstrap.png'
import SkillsCard from '../SkillsCard'


const Skills = () => {
    return (
        <section className="w-full min-h-screen flex flex-col mb-20">
            <div className="w-full mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EFD09E]">Skills</h2>
                <p className="text-lg">Technologies and tools that I use in building websites.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
                <SkillsCard logo={js} title={'JavaScript'}/>
                <SkillsCard logo={react} title={'React'}/>
                <SkillsCard logo={vite} title={'Vite'}/>
                <SkillsCard logo={tailwind} title={'TailwindCSS'}/>
                <SkillsCard logo={rails} title={'Rails'}/>
                <SkillsCard logo={ruby} title={'Ruby'}/>
                <SkillsCard logo={node} title={'NodeJS'}/>
                <SkillsCard logo={mongo} title={'MongoDB'}/>
                <SkillsCard logo={git} title={'Git'}/>
                <SkillsCard logo={photoshop} title={'Photoshop'}/>
                <SkillsCard logo={resolve} title={'Resolve'}/>
                <SkillsCard logo={wordpress} title={'WordPress'}/>
                <SkillsCard logo={bootstrap} title={'Bootstrap'}/>
            </div>
        </section>
    )
}

export default Skills