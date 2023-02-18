import React from 'react'

const Intro = () => {
  return (
    <section className="w-full flex flex-col items-start min-h-screen justify-center mb-20">
      <p className="text-lg mb-4 text-[#EFD09E]">Hey there! I am</p>
      <h1 className="text-4xl font-bold mb-4 lg:text-7xl text-[#FBEBD8]">Cee Jay Malacas</h1>
      <h2 className="text-3xl lg:text-7xl font-bold mb-4">Coding for more money?!</h2>
      <p className="text-base font-bold mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet vero veritatis.</p>
      <a className="px-12 py-2.5 text-lg rounded-md border-[0.1rem] border-[#EFD09E] text-[#FBEBD8]">Projects</a>
    </section>
  )
}

export default Intro