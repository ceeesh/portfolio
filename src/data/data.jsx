import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export const projects = [
    {
        title: 'My Portfolio Website',
        description: 'My newly created Front-End Web Developer Portfolio Website.',
        stackTech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
        liveUrl: 'https://ceeesh.github.io/MomentumApp/',
        githubRepo: 'https://github.com/ceeesh/portfolio',
    },
    {
        title: 'React Calculator App',
        description: 'Calculator that has multiple colorful theme.',
        stackTech: ['React', 'TailwindCSS', 'Vite'],
        liveUrl: 'https://calc-vite-jy.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/calc-react',
    },
    {
        title: 'E-commerce Product Page',
        description: 'An E-commerce Product Page challenge from the Frontend Mentor website.',
        stackTech: ['React', 'TailwindCSS', 'Vite'],
        liveUrl: 'https://ecommerce-productpage-jy.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/e-commerce-product-page',
    },
    {
        title: 'Youtube Clone Appp',
        description: 'A cloned app of youtube using free Youtube API.',
        stackTech: ['React', 'TailwindCSS', 'Youtube API', 'Vite'],
        liveUrl: 'https://jy-yt-clone.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/youtube-clone-app',
    },
    {
        title: 'Momentum App',
        description: 'Featuring to-do lists, weather, daily photos, and encouraging quotes.',
        stackTech: ['JavaScript', 'CSS'],
        liveUrl: 'https://ceeesh.github.io/MomentumApp/',
        githubRepo: 'https://github.com/ceeesh/MomentumApp',
    },
    {
        title: 'Banking App',
        description: 'A simple bank website',
        stackTech: ['React', 'TailwindCSS', 'sweetalert2', 'daisyui', 'Vite'],
        liveUrl: 'https://kzldlgr.github.io/',
        githubRepo: 'https://github.com/ceeesh/kcd-banking-app',
    },
]

export const socials = [
    {
        name: 'facebook',
        logo: <IoLogoFacebook size={22}/>,
        url: 'https://www.facebook.com/ceejay.malacas',
    },
    {
        name: 'github',
        logo: <IoLogoGithub size={22} />,
        url: 'https://github.com/ceeesh',
    },
    {
        name: 'linkedin',
        logo: <IoLogoLinkedin size={22} />,
        url: 'https://www.linkedin.com/in/cee-jay-malacas-155a25218',
    },
    {
		name: 'instagram',
		logo: <IoLogoInstagram size={22} />,
		url: 'https://www.instagram.com/_malacasc',
	},
]