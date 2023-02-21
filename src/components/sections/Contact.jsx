import React from 'react'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
    return (
        <section className='h-96 my-16'>
            <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold mb-4 text-primary flex justify-center text-mainTxt">Get In Touch</h2>
                <p className="text-center text-whiteSecondary mb-12">
                    Currently, I am looking for opportunities and accepting freelance projects. If you think I am a good asset, kindly send me a message.
                </p>
                <a className="px-12 py-2.5 text-lg rounded-md border-[0.1rem] border-mainTxt text-mainTxt bg-btnbg">Say Hello !</a>
            </div>
        </section>
    )
}

export default Contact