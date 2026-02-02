import reactLogo from '../../assets/react.svg';
import kodyLogoDark from '../../assets/kodyLogoDark.png';
import LittleLemon from '../../assets/Projects/LittleLemon.png';


import CSS3 from '../../assets/TechStackLogos/CSS3.svg'
import HTML5 from '../../assets/TechStackLogos/HTML5.svg'
import GitHub from '../../assets/TechStackLogos/GitHub.svg'
import JavaScript from '../../assets/TechStackLogos/JavaScript.svg'
import React from '../../assets/TechStackLogos/React.svg'
import TailwindCSS from '../../assets/TechStackLogos/TailwindCSS.svg'
import Vite from '../../assets/TechStackLogos/Vite.svg'


const WebProjectLookUp = {
    "Portfolio Website": {
        title:"Portfolio Website",
        longDescription:"A self-made website to show off work",
        shortDescription:"A self-made portfolio",
        img: kodyLogoDark,
        videoLink: "",
        responsibilities:[
            "Utilized Figma to design a responsive front-end",
            "Developed portfolio using React to show of personal projects",
            "Implemented React’s component based integration to create +5 components, speeding up development time 99% and have cohesive design site wide",
            "Used Tailwind CSS to create responsive web application that is highly interactive",
            "Made use of NPM for libraries and frameworks to create hamburger menu for mobile and routing",
            "Employed Vite to bundle project for faster deployment",
            "Deployed website using GitHub Pages to host web application",
        ],
        tech:[React, JavaScript, TailwindCSS, HTML5, Vite, GitHub],
        playableLink:"https://kodymrwood.github.io/Portfolio/",
    },
    "Little Lemon Restaurant": {
        title:"Little Lemon Restaurant",
        longDescription:"A project that I made as a Capstone project for Meta's Corsera Front-end Development course",
        shortDescription:"Capstone SAP",
        img: LittleLemon,
        videoLink: "",
        responsibilities:[
            "Built a full responsive, accessible React app with semantic markup",
            "Integrated RESTful API calls and unit testing via Jest",
            "Employed Git for version control",
            "Made use of Formik and Yup for form handling and validation",
        ],
        tech:[React, JavaScript, CSS3, HTML5, GitHub],
        playableLink:"https://kodymrwood.github.io/LittleLemonRestaurant/",
    },
    "Full Stack Project": {
        title:"Full Stack Project",
        longDescription:"A personal project of full stack development to show off my skills in full development work",
        shortDescription:"WIP: More to Come",
        img: reactLogo,
        videoLink: "",
        responsibilities:["","","","","",""],
        tech:[JavaScript, TailwindCSS, React, Vite, GitHub],
        playableLink:"https://kodymrwood.github.io/Portfolio/",
    }
}

export default WebProjectLookUp;