import PortfolioPage from "../PortfolioPage/PortfolioPage";
import reactLogo from '../../assets/react.svg';
import kodyLogoDark from '../../assets/kodyLogoDark.png';
import LittleLemon from '../../assets/LittleLemon.png';

// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

const data = {
    name: "WebPage",
        projects: [
        {
        title: "This Portfolio Site",
        description: "A temp web dev project description",
        img: kodyLogoDark,
        },
        {
        title: "Little Lemon Restaurant",
        description: "A temp web dev project description",
        img: LittleLemon,
        },
        {
        title: "Web Dev Project 3",
        description: "A temp web dev project description",
        img: reactLogo,
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