import React from 'react'
import { socials } from '../../data/data'
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="max-w-[1440px] px-5 md:px-10 py-6 mx-auto text-whiteSecondary">
        <footer>
            <nav className="mb-4 lg:hidden">
                <ul className="flex items-center justify-center gap-8">{socials.map((social, indx) => (
                  <li key={indx}><a className="text-mainTxt" href={social.url}>{social.logo}</a></li>
                ))}</ul>
            </nav>
            <p className='text-sm text-center flex gap-1 justify-center'>< RiCopyrightLine size={15} className="mt-0.5"/> 2022 Cee Jay Malacas. All Rights Reserved. </p>
        </footer>
    </section>
  )
}

export default Footer