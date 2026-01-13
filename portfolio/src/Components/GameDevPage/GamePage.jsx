import PortfolioPage from "../PortfolioPage/PortfolioPage";
import BMFImg from '../../assets/BMF.png';
import BanquetBrawlImg from '../../assets/BanquetBrawl.png';
import DownRootImg from '../../assets/Downroot.png';
import MeteorMayhemImg from '../../assets/MeteorMayhem.png';
import TactileImg from '../../assets/Tactile.png';
import SlimeballImg from '../../assets/SlimeBall.png';

// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

const data = {
    name: "Game Developer",
    projects: [
        {
        title: "Banquet Brawl",
        description: "A temp game dev project description",
        img: BanquetBrawlImg,
        },
        {
        title: "Downroot",
        description: "A temp game dev project description",
        img: DownRootImg,
        },
        {
        title: "Meteor Mayhem",
        description: "A temp game dev project description",
        img: MeteorMayhemImg,
        },
        {
        title: "Tactile",
        description: "A temp game dev project description",
        img: TactileImg,
        },
        {
        title: "Slimeball",
        description: "A temp game dev project description",
        img: SlimeballImg,
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