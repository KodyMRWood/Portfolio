import PortfolioPage from "../PortfolioPage/PortfolioPage";
import GameDataLU from "./GameProjectLookUp"


// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

function GamePage() {
    const name =  "Game Developer";
    const description= 'This page shows all the game development projects that I have worked on over the years. Feel free to click on them and explore them further!';

    return (
        <>    
            <PortfolioPage name={name} description={description} data={GameDataLU} /> 
        </> 
    )
}

export default GamePage;