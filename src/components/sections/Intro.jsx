import { motion } from "framer-motion"
import { staggerContainer, fade, spanFade } from "../../utils/framerMotion"
import { lastName } from '../../data/data'
import { Link } from "react-router-dom"

const Intro = () => {

  const name = lastName.split('')

  return (
    <motion.section variants={staggerContainer(0.4, 1.3)} initial="offscreen" animate="onscreen"
      className="relative w-full flex flex-col items-start min-h-screen justify-center mb-20">
      <motion.p variants={fade(0.8, .3)} className="text-lg mb-4 text-secondaryTxt z-20 ">Hey there! I am</motion.p>
      <motion.h1 variants={fade(0.8, 0)} className="text-4xl font-bold mb-4 lg:text-7xl text-mainTxt z-20 typing-demo">Cee Jay Malacas</motion.h1>
      <motion.h2 variants={fade(0.8, .5)} className="text-3xl lg:text-7xl font-bold mb-4 z-20 ">Coding for more money?!</motion.h2>
      <motion.p variants={fade(0.8, .7)} className="text-base font-thin mb-4  z-20 ">A highly passionate Front-end Web Developer and Mobile Developer.</motion.p>
      <Link to='/projects'>
        <motion.span variants={fade(0.8, .7)}
          className="z-20 px-12 py-2.5 text-lg rounded-md border-[0.1rem] bg-btnbg border-mainTxt text-mainTxt
       hover:bg-btnHvr hover:-translate-y-1 transition all duration-300 delay-75">Projects
        </motion.span>
      </Link>
      <p className="absolute -right-2 md:-bottom-2 lg:-bottom-2 lg:right-0 text-8xl font-bold text-btnbg flex flex-col justify-end items-end uppercase z-0">
        {name.map((letter, idx) => (
          <motion.span variants={spanFade(idx)} key={idx}>{letter}</motion.span>
        ))}
      </p>
    </motion.section>
  )
}

export default Intro