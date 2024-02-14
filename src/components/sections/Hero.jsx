import { motion } from "framer-motion"
import { fade, spanFade } from "../../utils/framerMotion"
import { lastName } from '../../data/data'
import { Link } from "react-router-dom"
import { useThemeMode } from "react-theme-mode"
import resume from '../../assets/images/Cee Jay-Malacas-Resume-2024.pdf'

const Intro = () => {
  const [theme] = useThemeMode()
  const name = lastName.split('')

  return (
    <section className="relative w-full flex flex-col items-start min-h-screen justify-center mb-20">
      <motion.p variants={fade(0.8, .3)} initial="offscreen" animate="onscreen"
        className={`${theme === 'dark' ? 'text-secondaryTxt' : 'text-gray-500'} text-lg mb-4  z-20 `}>Hey there! I am</motion.p>
      <motion.h1 variants={fade(0.8, 0)} initial="offscreen" animate="onscreen"
        className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-4xl font-bold mb-4 lg:text-7xl z-20 typing-demo`}>Cee Jay Malacas.</motion.h1>
      <motion.h2 variants={fade(0.8, .5)} initial="offscreen" animate="onscreen"
        className={`text-3xl lg:text-7xl font-bold mb-4 z-20 ${theme === 'dark' ? 'text-secondaryTxt' : 'text-black'}`}>I build stuff sometimes</motion.h2>
      <motion.p variants={fade(0.8, .7)} initial="offscreen" animate="onscreen"
        className="text-base font-thin mb-4  z-20 ">A highly passionate Full-Stack Web Developer and Mobile Developer.</motion.p>
      <div className="flex gap-2">
        <Link to='/projects'>
          <motion.span variants={fade(0.8, .7)} initial="offscreen" animate="onscreen"
            className={`${theme === 'dark' ? 'bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr' : 'text-black border-black hover:bg-black hover:text-mainTxt'}
          z-20 px-10 py-2 md:px-12 md:py-2.5 text-sm md:text-lg rounded-md border-[0.1rem] transition-all duration-300 delay-75`}>Projects
          </motion.span>
        </Link>
        <a className="" href={resume} download="resume">
          <motion.span variants={fade(0.8, .7)} initial="offscreen" animate="onscreen"
            className={`${theme === 'dark' ? 'bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr' : 'text-black border-black hover:bg-black hover:text-mainTxt'}
          z-20 px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-lg rounded-md border-[0.1rem] transition-all duration-300 delay-75`}>Download CV
          </motion.span>
        </a>
      </div>
      <p className={`${theme === 'dark' ? 'text-btnbg' : 'text-stroke font-thin'} absolute -right-2 md:-bottom-2 lg:-bottom-2 lg:right-0 text-8xl font-bold hidden sm:flex flex-col justify-end items-end uppercase z-0`}>
        {name.map((letter, idx) => (
          <motion.span variants={spanFade(idx)} initial="offscreen" animate="onscreen" key={idx}>{letter}</motion.span>
        ))}
      </p>
    </section>
  )
}

export default Intro