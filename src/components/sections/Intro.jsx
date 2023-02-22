import React from 'react'

const Intro = () => {
  return (
    <section className="relative w-full flex flex-col items-start min-h-screen justify-center mb-20">
      <p className="text-lg mb-4 text-secondaryTxt">Hey there! I am</p>
      <h1 className="text-4xl font-bold mb-4 lg:text-7xl text-mainTxt">Cee Jay Malacas</h1>
      <h2 className="text-3xl lg:text-7xl font-bold mb-4">Coding for more money?!</h2>
      <p className="text-base font-thin mb-4 ">A highly passionate Front-end Web Developer and Mobile Developer.</p>
      <a className="px-12 py-2.5 text-lg rounded-md border-[0.1rem] bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr hover:-translate-y-1 transition all duration-300 delay-75">Projects</a>
      <p className="absolute -right-2 md:-bottom-2 lg:-bottom-2 lg:right-0 text-8xl  font-bold text-btnbg flex flex-col justify-end items-end uppercase">
        <span>m</span>
        <span>a</span>
        <span>l</span>
        <span>a</span>
        <span>c</span>
        <span>a</span>
        <span>s</span>
      </p>
    </section>
  )
}

export default Intro