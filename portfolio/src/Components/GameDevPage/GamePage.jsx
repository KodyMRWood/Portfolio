import PortfolioPage from "../PortfolioPage/PortfolioPage";

// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

const data = {
    name: "GamePage",
    projects: [
        {
        title: "Game Dev Project 1",
        description: "A temp game dev project description",
        },
        {
        title: "Game Dev Project 2",
        description: "A temp game dev project description",
        },
        {
        title: "Game Dev Project 3",
        description: "A temp game dev project description",
        },
        {
        title: "Game Dev Project 4",
        description: "A temp game dev project description",
        },
        {
        title: "Game Dev Project 5",
        description: "A temp game dev project description",
        }
    ],
};


function GamePage() {
    return (
        <>
            <PortfolioPage data={data} />   
        </> 
    )
}

export default GamePage;