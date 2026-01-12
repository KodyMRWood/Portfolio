import PortfolioPage from "../PortfolioPage/PortfolioPage";

// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content

const data = {
    name: "WebPage",
        projects: [
        {
        title: "Web Dev Project 1",
        description: "A temp web dev project description",
        },
        {
        title: "Web Dev Project 2",
        description: "A temp web dev project description",
        },
        {
        title: "Web Dev Project 3",
        description: "A temp web dev project description",
        }
    ],
};


function WebPage() {
    return (
        <>
            <PortfolioPage data={data} />
        </>
    )
}

export default WebPage;