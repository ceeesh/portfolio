import React from 'react'

const Contact = ({pTop}) => {
    return (
        <section className={`z-50 ${pTop ? 'h-screen' : 'h-96 mb-40 mt-36'}`}>
            <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center ">
                <h2 className="text-5xl font-bold mb-4 text-primary flex justify-center text-mainTxt ">Get In Touch</h2>
                <p className="text-center text-whiteSecondary mb-12 ">
                    Currently, I am looking for opportunities and accepting freelance projects. If you think I am a good asset, kindly send me a message.
                </p>
                <a className="cursor-pointer px-12 py-2.5 text-lg rounded-md border-[0.1rem] border-mainTxt text-mainTxt bg-btnbg hover:bg-btnHvr hover:-translate-y-1 transition all duration-300 delay-75">Say Hello !</a>
            </div>
        </section>
    )
}

export default Contact