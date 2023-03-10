import { useThemeMode } from "react-theme-mode"

const SkillsCard = ({ logo, title }) => {
    const [theme] = useThemeMode()
    return (
        <div className="p-4  rounded-lg flex flex-col justify-between item-center h-28 shadow-2xl hover:-translate-y-6 transition all duration-300 delay-75 ">
            <div className=" flex justify-center items-center">
                <img className="w-[60px] h-[60px]" src={logo} />
            </div>

            <div className="flex justify-center items-center">
                <h3 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'}`}>{title}</h3>
            </div>
        </div>
    )
}

export default SkillsCard