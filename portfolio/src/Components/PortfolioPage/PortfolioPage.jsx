import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import Card from '../Cards/Card';
// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content


function PortfolioPage({data}) {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-(--bg)">
            <NavigationBar/>
            <section className='flex flex-col justify-center items-center gap-8 bg-(--bg) px-5'>
                <h1 className='title'> {data.name} Dev Page</h1>
                <div className='container flex flex-wrap justify-center self-center my-24 gap-4'>
                    {data.projects.map((project) => (
                        <Card key={project.name} data={project}></Card>
                    ))}
                </div>
                
            </section>
            <Footer/>
        </div>
    )
}

export default PortfolioPage;