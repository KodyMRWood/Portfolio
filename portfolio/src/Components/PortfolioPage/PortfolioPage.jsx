import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import Card from '../Cards/Card';
// Pass in project information that need to be displayed
// Both pages will be the same layout, just different content


function PortfolioPage({name, description, data}) {
    return (
        <div className="flex-1 flex flex-col justify-between min-h-screen bg-(--bg-dark)">
            <NavigationBar/>
            <section className='flex flex-1 flex-col content-center gap-8 bg-(--bg-dark) '>

                <div className=' flex flex-col w-full bg-(--bg) px-5 shadow-md items-center'>
                    <h1 className='title'> {name}</h1>
                    <p className='my-18 max-w-5xl'> {description}</p>
                </div>
                <article className='flex h-auto w-full px-[2vh] justify-center '>
                    <div className='h-auto w-full flex flex-wrap justify-center max-w-7xl gap-5 my-10 px-10'>
                        {Object.keys(data).map((key) => (
                            <Card key={key} data={data[key]}></Card>
                        ))}
                    </div>
                </article>
                
            </section>
            <Footer/>
        </div>
    )
}

export default PortfolioPage;