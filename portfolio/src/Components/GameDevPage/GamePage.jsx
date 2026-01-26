import PortfolioPage from "../PortfolioPage/PortfolioPage";
import GameData from "./GameProjectsData"
import GameDataLU from "./GameProjectLookUp"


// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

function GamePage() {
    const name =  "Game Developer";
    const description= "This page shows all the game dev projects that I have working on over the years. Currently, all my works have not been added or they may not be 100% correct. However, I am working on fixing it. Feel free to click on them and explore them further!";

    return (
        <>    
            <PortfolioPage name={name} description={description} data={GameDataLU} /> 
        </> 
    )
}

export default GamePage;