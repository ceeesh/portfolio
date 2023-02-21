import React from 'react'

const SkillsCard = ({ logo, title }) => {
    return (
        <div className="p-4  rounded-lg flex flex-col justify-between item-center h-28 shadow-2xl">
            <div className=" flex justify-center items-center">
                <img className="w-[60px] h-[60px]" src={logo} />
            </div>

            <div className="flex justify-center items-center">
                <h3 className="text-white">{title}</h3>
            </div>
        </div>
    )
}

export default SkillsCard