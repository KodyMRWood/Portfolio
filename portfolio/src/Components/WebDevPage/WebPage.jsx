import PortfolioPage from "../PortfolioPage/PortfolioPage";
import WebData from "./WebProjectsData";

function WebPage() {
    const name= "WebPage";
    const description = "This page shows all the web development projects that I have worked on over the years. Feel free to click on them and explore them further!";
    return (
        <>
             <PortfolioPage name={name} description={description} data={WebData} /> 
        </>
    )
}

export default WebPage;