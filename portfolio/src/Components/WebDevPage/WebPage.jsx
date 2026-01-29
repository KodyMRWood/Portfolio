import PortfolioPage from "../PortfolioPage/PortfolioPage";
import WebData from "./WebProjectsData";
import WebDataLU from "./WebProjectLookUp"

function WebPage() {
    const name= "WebPage";
    const description = "This page shows all the web development projects that I have worked on over the years. Feel free to click on them and explore them further!";
    return (
        <>
             <PortfolioPage name={name} description={description} data={WebDataLU} /> 
        </>
    )
}

export default WebPage;