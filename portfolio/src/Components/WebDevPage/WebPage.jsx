import PortfolioPage from "../PortfolioPage/PortfolioPage";
import WebData from "./WebProjectsData";

function WebPage() {
    return (
        <>
            <PortfolioPage data={WebData} />
        </>
    )
}

export default WebPage;