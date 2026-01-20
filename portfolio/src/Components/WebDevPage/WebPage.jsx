import PortfolioPage from "../PortfolioPage/PortfolioPage";
import reactLogo from '../../assets/react.svg';
import kodyLogoDark from '../../assets/kodyLogoDark.png';
import LittleLemon from '../../assets/LittleLemon.png';


import CSS3 from '../../assets/TechStackLogos/CSS3.svg'
import HTML5 from '../../assets/TechStackLogos/HTML5.svg'
import GitHub from '../../assets/TechStackLogos/GitHub.svg'
import JavaScript from '../../assets/TechStackLogos/JavaScript.svg'
import React from '../../assets/TechStackLogos/React.svg'
import TailwindCSS from '../../assets/TechStackLogos/TailwindCSS.svg'
import Vite from '../../assets/TechStackLogos/Vite.svg'


const data = {
    name: "WebPage",
        projects: [
        {
        title: "This Portfolio Site",
        description: "A temp web dev project description",
        img: kodyLogoDark,
        techStack: [React, JavaScript, TailwindCSS, HTML5, Vite, GitHub],
        },
        {
        title: "Little Lemon Restaurant",
        description: "A temp web dev project description",
        img: LittleLemon,
        techStack: [React, JavaScript, CSS3, HTML5, GitHub],
        },
        {
        title: "Web Dev Project 3",
        description: "A temp web dev project description",
        img: reactLogo,
        techStack: [JavaScript, TailwindCSS, React, Vite, GitHub],
        }
    ],
    description: "This page shows all the web development projects that I have worked on over the years. Feel free to click on them and explore them further!",
};


function WebPage() {
    return (
        <>
            <PortfolioPage data={data} />
        </>
    )
}

export default WebPage;