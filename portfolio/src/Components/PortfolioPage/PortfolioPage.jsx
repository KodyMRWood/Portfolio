import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import Card from '../Cards/Card';
// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content


function PortfolioPage({data}) {
    return (
        <div className="flex flex-col min-h-screen bg-(--bg-dark)">
            <NavigationBar/>
            <section className='flex flex-1 flex-col content-center gap-8 bg-(--bg-dark) '>

                <div className='w-full bg-(--bg) px-5 shadow-md'>
                    <h1 className='title'> {data.name}</h1>
                    <p className='my-18'> {data.description}</p>
                </div>
                <section className='h-auto w-full px-[2vh] '>
                    <div className='h-auto w-full flex flex-wrap justify-center gap-5 my-10 px-5'>
                        {data.projects.map((project) => (
                            <Card key={project.name} data={project}></Card>
                        ))}
                    </div>
                </section>
                
            </section>
            <Footer/>
        </div>
    )
}

export default PortfolioPage;