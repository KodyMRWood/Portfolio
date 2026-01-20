import PortfolioPage from "../PortfolioPage/PortfolioPage";
import GameData from "../GameDevPage/GameProjectsData"


// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content




function GamePage() {
    return (
        <>
            <PortfolioPage data={GameData} /> 
        </> 
    )
}

export default GamePage;