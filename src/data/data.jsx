import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import exp from '../assets/images/express.png'
import exp2 from '../assets/images/express2.png'
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
import elderarmorusa from '../assets/images/elderarmor.png'
import calc from '../assets/images/calcombi.png'
import ecommerce from '../assets/images/ecommerce.png'
import momentum from '../assets/images/momentum.png'
import bankingapp from '../assets/images/bankapp.png'
import dict from '../assets/images/dictionary.png'
import todo from '../assets/images/todoapp.png'
import advice from '../assets/images/advice.png'
import tictactoe from '../assets/images/tictactoe.png'
import youtube from '../assets/images/youtube.png'
import portfolio from '../assets/images/portfolio.png'
import Sql from '../assets/images/SQL.png'
import postgre from '../assets/images/postgre.png'
import sqlite from '../assets/images/pngegg.png'
import postman from '../assets/images/postman.svg'
import github from '../assets/images/github.png'
import weby from '../assets/images/weby.png'
import linux from '../assets/images/linux.png'
import php from '../assets/images/php.png'
import laravel from '../assets/images/laravel.png'
import stockapp from '../assets/images/stockapp.png'
import sqlworkbench from '../assets/images/sqlworkbench.png'
import docker from '../assets/images/docker.png'
import capital from '../assets/images/capital.png'
import fetch from '../assets/images/fetch.png'

export const projects = [
    {
        title: 'My Portfolio Website',
        description: 'My newly created Front-End Web Developer Portfolio Website.',
        stackTech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
        liveUrl: 'https://malacas.vercel.app/',
        githubRepo: 'https://github.com/ceeesh/portfolio',
        img: portfolio,
    },
    {
        title: 'Capital Office UK',
        description: "A Laravel & React app that manages the organization's sales, reports, documents and clients' accounts.",
        stackTech: ['Laravel', 'PHP', 'React', 'Bootstrap', 'Vite', 'Docker', 'MySQL'],
        liveUrl: 'https://admin.capital-office.co.uk/login',
        githubRepo: '',
        img: capital,
    },
    {
        title: 'Fetch Workpapers',
        description: "A Laravel & PHP app that provides accountants with a transformative solution to simplify and automate their workpapers using Microsoft Excel.",
        stackTech: ['Laravel', 'PHP', 'React', 'Bootstrap', 'Vite', 'MySQL'],
        liveUrl: 'https://fetc.dev.hpprojects.net/',
        githubRepo: '',
        img: fetch,
    },
    {
        title: 'Elder Armor USA',
        description: 'Elder Armor is a Hip Protector online store for elder people in US.',
        stackTech: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
        liveUrl: 'https://elderarmorusa.com/',
        githubRepo: '',
        img: elderarmorusa,
    },
    {
        title: 'Weby',
        description: 'A React on Rails application that allows users to schedule online appointments for their website design ideas.',
        stackTech: ['Rails', 'React', 'TailwindCSS', 'Vite'],
        liveUrl: 'https://weby-beta.vercel.app/',
        githubRepo: 'https://github.com/ceeesh/weby',
        img: weby,
    },
    {
        title: 'Bullish Hunter',
        description: 'A Stock Trading Application built on Ruby on Rails, which allows users to buy stocks through a market monitoring API.',
        stackTech: ['Rails', 'Ruby', 'Bootstrap'],
        liveUrl: 'https://malacas.vercel.app/',
        githubRepo: 'https://github.com/ceeesh/stock_app',
        img: stockapp,
    },
    {
        title: 'React Calculator App',
        description: 'Calculator that has multiple colorful theme.',
        stackTech: ['React', 'TailwindCSS', 'Vite'],
        liveUrl: 'https://calc-vite-jy.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/calc-react',
        img: calc,
    },
    {
        title: 'E-commerce Product Page',
        description: 'An E-commerce Product Page challenge from the Frontend Mentor website.',
        stackTech: ['React', 'TailwindCSS', 'Vite'],
        liveUrl: 'https://ecommerce-productpage-jy.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/e-commerce-product-page',
        img: ecommerce,
    },
    {
        title: 'Youtube Clone Appp',
        description: 'A cloned app of youtube using free Youtube API.',
        stackTech: ['React', 'TailwindCSS', 'Youtube API', 'Vite'],
        liveUrl: 'https://jy-yt-clone.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/youtube-clone-app',
        img: youtube,
    },
    {
        title: 'Momentum App',
        description: 'Featuring to-do lists, weather, daily photos, and encouraging quotes.',
        stackTech: ['Vanilla JavaScript', 'CSS'],
        liveUrl: 'https://ceeesh.github.io/MomentumApp/',
        githubRepo: 'https://github.com/ceeesh/MomentumApp',
        img: momentum,
    },
    {
        title: 'Banking App',
        description: 'A simple bank website.',
        stackTech: ['React', 'TailwindCSS', 'Sweetalert2', 'DaisyUI', 'Vite'],
        liveUrl: 'https://kzldlgr.github.io/kcd-banking-app/',
        githubRepo: 'https://github.com/ceeesh/kcd-banking-app',
        img: bankingapp,
    },
    {
        title: 'Dictionary App',
        description: 'A cloned dictionary, provides their meaning, or gives the equivalent words in a different language.',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://dictionary-app-vite-react.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/dictionary-app',
        img: dict,
    },
    {
        title: 'To-Do App',
        description: 'A To-Do app that has a dark/light theme toggle.',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://todo-vite-react.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/todo-app-react',
        img: todo,
    },
    {
        title: 'Advice Generator App',
        description: 'Generates a random witty quotes of advice with Advice Slip API.',
        stackTech: ['React', 'TailwindCSS', 'Vite', 'API'],
        liveUrl: 'https://advice-gen-app-cjm.netlify.app/',
        githubRepo: 'https://github.com/ceeesh/advice-generator-app',
        img: advice,
    },
    {
        title: 'Tic Tac Toe',
        description: 'A simple Tic Tac Toe game with dark/light theme toggle.',
        stackTech: ['VanillaJS', 'CSS'],
        liveUrl: 'https://ceeesh.github.io/tictactoe/',
        githubRepo: 'https://github.com/ceeesh/tictactoe',
        img: tictactoe,
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
        type: 'nav_item',
        url: '/about',
    },
    {
        title: 'Skills',
        type: 'nav_item',
        url: '/skills',
    },
    {
        title: 'Projects',
        type: 'nav_item',
        url: '/projects',
    },
    {
        title: 'Contact',
        type: 'nav_item',
        url: '/contact',
    },
    {
        type: 'lightMode',
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
        title: 'Express',
        logo: exp2
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
    {
        title: 'SQL',
        logo: Sql
    },
    {
        title: 'PostgreSQL',
        logo: postgre
    },
    {
        title: 'Sqlite',
        logo: sqlite
    },
    {
        title: 'Postman',
        logo: postman
    },
    {
        title: 'Github',
        logo: github
    },
    {
        title: 'Linux',
        logo: linux
    },
    {
        title: 'Php',
        logo: php
    },
    {
        title: 'Laravel',
        logo: laravel
    },
    {
        title: 'SQL Workbench',
        logo: sqlworkbench
    },
    {
        title: 'Docker',
        logo: docker
    }
]


export const lastName = 'MALACAS'