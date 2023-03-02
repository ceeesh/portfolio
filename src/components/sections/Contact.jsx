import { motion } from "framer-motion"
import { useState } from "react";
import { useThemeMode } from 'react-theme-mode'

const Contact = ({ pTop }) => {
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
            className={`z-50 ${pTop ? 'min-h-screen flex justify-center items-center' : 'h-96 mb-40 mt-36'}`}>
            <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center ">
                <h2 className={`${theme === 'dark' ? 'text-mainTxt' : 'text-black'} text-5xl font-bold mb-4 text-primary flex justify-center `}>Get In Touch</h2>
                <p className="text-center text-whiteSecondary mb-12 ">
                    Currently, I am looking for opportunities and accepting freelance projects. If you think I am a good asset, kindly send me a message.
                </p>
                <a href="mailto:ceejaymalacas17@gmail.com" target="_blank" 
                className={`${theme === 'dark' ? 'bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr' : 'text-black border-black hover:bg-black hover:text-mainTxt'}
                cursor-pointer px-12 py-2.5 text-lg rounded-md 
                border-[0.1rem] hover:-translate-y-1 transition-all duration-300 delay-75`}>Say Hello !</a>
            </div>
        </motion.section>
    )
}

export default Contact