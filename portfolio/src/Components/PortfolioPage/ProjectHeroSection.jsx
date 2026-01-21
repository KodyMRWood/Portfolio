

function ProjectHeroSection ({name,data}) {    
    return (
        <> 
            <section className='flex flex-1 flex-col content-center gap-8 bg-(--bg-dark) '>
                <div className=' flex flex-col w-full bg-(--bg) px-5 shadow-md items-center'>
                    <h1 className='title'> {name} </h1>
                    <p className='my-18 max-w-5xl'> {data.description} </p>
                    <img src=""></img>
                </div>
            </section>
        </>
    )
}

export default ProjectHeroSection;