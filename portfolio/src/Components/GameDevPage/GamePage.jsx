import PortfolioPage from "../PortfolioPage/PortfolioPage";
import BMFImg from '../../assets/BMF.png';
import BanquetBrawlImg from '../../assets/BanquetBrawl.png';
import DownRootImg from '../../assets/Downroot.png';
import MeteorMayhemImg from '../../assets/MeteorMayhem.png';
import TactileImg from '../../assets/Tactile.png';
import SlimeballImg from '../../assets/SlimeBall.png';

import CPlusPlus from '../../assets/TechStackLogos/CPlusPlus.svg'
import CSharp from '../../assets/TechStackLogos/CSharp.svg'
import GitHub from '../../assets/TechStackLogos/GitHub.svg'
import OpenGL from '../../assets/TechStackLogos/OpenGL.svg'
import Unity from '../../assets/TechStackLogos/Unity.svg'
import Unreal from '../../assets/TechStackLogos/Unreal.svg'


// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

const data = {
    name: "Game Developer",
    projects: [
        {
        title: "Banquet Brawl",
        description: "A temp game dev project description",
        img: BanquetBrawlImg,
        techStack: [Unity, CSharp, GitHub],
        },
        {
        title: "Downroot",
        description: "A temp game dev project description",
        img: DownRootImg,
        techStack: [Unity, CSharp, GitHub],
        },
        {
        title: "Meteor Mayhem",
        description: "A temp game dev project description",
        img: MeteorMayhemImg,
        techStack: [Unity, CSharp, GitHub],
        },
        {
        title: "Tactile",
        description: "A temp game dev project description",
        img: TactileImg,
        techStack: [Unity, CSharp, GitHub],
        },
        {
        title: "Slimeball",
        description: "A temp game dev project description",
        img: SlimeballImg,
        techStack: [OpenGL, CPlusPlus, GitHub],
        },
    ],
    description:"This page shows all the game dev projects that I have working on over the years. Feel free to click on them and explore them further!"
};


function GamePage() {
    return (
        <>
            <PortfolioPage data={data} /> 
        </> 
    )
}

export default GamePage;