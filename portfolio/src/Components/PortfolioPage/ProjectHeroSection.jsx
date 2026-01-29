
function ProjectHeroSection ({name,data}) {    
    return (
        <> 
            <section className='flex  flex-col content-center gap-8 bg-(--bg)'>
                <div className='flex flex-col px-5 w-full shadow-md items-center'>
                    <h1 className='title'> {name} </h1>
                    <p className='my-18 max-w-5xl'> {data.longDescription} </p>
                </div>
            </section>
        </>
    )
}

export default ProjectHeroSection;