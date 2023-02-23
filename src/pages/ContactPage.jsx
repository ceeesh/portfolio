import React from 'react'

const ContactPage = () => {
    return (
        <section className='h-96 z-50 w-full min-h-screen flex flex-col mx-auto px-5 max-w-6xl md:px-10 lg:px-12 xl:px-0'>
        <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold mb-4 text-primary flex justify-center text-mainTxt">Get In Touch</h2>
            <p className="text-center text-whiteSecondary mb-12">
                Currently, I am looking for opportunities and accepting freelance projects. If you think I am a good asset, kindly send me a message.
            </p>
            <a className="px-12 py-2.5 text-lg rounded-md border-[0.1rem] border-mainTxt text-mainTxt bg-btnbg hover:bg-btnHvr hover:-translate-y-1 transition all duration-300 delay-75">Say Hello !</a>
        </div>
    </section>
    )
}

export default ContactPage