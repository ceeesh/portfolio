import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import lightMode from '../assets/images/sun.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.svg'
import vite from '../assets/images/vite.svg'
import tailwind from '../assets/images/tailwind.svg'
import rails from '../assets/images/rails.png'
import ruby from '../assets/images/ruby.png'
import node from '../assets/images/node.png'
import mongo from '../assets/images/mongo.png'
import resolve from '../assets/images/resolve.png'
import git from '../assets/images/git.svg'
import photoshop from '../assets/images/photoshop.svg'
import wordpress from '../assets/images/wordpress.png'
import bootstrap from '../assets/images/bootstrap.png'

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
        stackTech: ['Vanilla JavaScript', 'CSS'],
        liveUrl: 'https://ceeesh.github.io/MomentumApp/',
        githubRepo: 'https://github.com/ceeesh/MomentumApp',
    },
    {
        title: 'Banking App',
        description: 'A simple bank website',
        stackTech: ['React', 'TailwindCSS', 'Sweetalert2', 'DaisyUI', 'Vite'],
        liveUrl: 'https://kzldlgr.github.io/',
        githubRepo: 'https://github.com/ceeesh/kcd-banking-app',
    },
    {
        title: 'Dictionary App',
        description: 'A cloned dictionary, gives their meaning, or gives the equivalent words in a different language',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://dictionary-app-vite-react.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/dictionary-app',
    },
    {
        title: 'To-Do App',
        description: 'A cloned dictionary, gives their meaning, or gives the equivalent words in a different language',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://todo-vite-react.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/todo-app-react',
    },
    {
        title: 'Advice Generator App',
        description: 'A cloned dictionary, gives their meaning, or gives the equivalent words in a different language',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://advice-gen-app-cjm.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/advice-generator-app',
    },
    {
        title: 'Tic Tac Toe',
        description: 'Tic Tac Toe',
        stackTech: ['VanillaJS', 'CSS'],
        liveUrl: 'https://ceeesh.github.io/tictactoe/',
        githubRepo: 'https://github.com/ceeesh/tictactoe',
    },
]

export const socials = [
    {
        name: 'facebook',
        logo: <IoLogoFacebook size={22} />,
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

export const navLinks = [
    {
        title: 'About',
        cName: 'nav_item',
        url: '/about',
    },
    {
        title: 'Skills',
        cName: 'nav_item',
        url: '/skills',
    },
    {
        title: 'Projects',
        cName: 'nav_item',
        url: '/projects',
    },
    {
        title: 'Contact',
        cName: 'nav_item',
        url: '/contact',
    },
    {
        cName: 'lightMode',
        url: lightMode,
    },
];

export const skillStack = [
    {
        title: 'JavaScript',
        logo: js
    },
    {
        title: 'React',
        logo: react
    },
    {
        title: 'Vite',
        logo: vite
    },
    {
        title: 'tailwindCSS',
        logo: tailwind
    },
    {
        title: 'Rails',
        logo: rails
    },
    {
        title: 'Ruby',
        logo: ruby
    },
    {
        title: 'Node',
        logo: node
    },
    {
        title: 'Mongo',
        logo: mongo
    },
    {
        title: 'Resolve',
        logo: resolve
    },
    {
        title: 'Git',
        logo: git
    },
    {
        title: 'Photoshop',
        logo: photoshop
    },
    {
        title: 'Wordpress',
        logo: wordpress
    },
    {
        title: 'Bootstrap',
        logo: bootstrap
    },
]

export const lastName = 'MALACAS'