
function Card({data}) {
    return (
        <>
            <article>
                <div className="card">
                    <img className="w-full h-[60%] object-cover rounded-xl" src={data.img} alt="Change this with data passed in"></img>
                    <div className="mt-2 px-2">
                        <h2 className='text-left text-lg md:text-lg'>{data.title}</h2>
                        <p className='text-left text-(--text-muted) text-base'>{data.description}</p>
                        <div className='flex flex-row gap-2 pt-4'>
                        {data.techStack.map((tech) => (
                            <img key= {data.title+" "+toString(tech)} src={tech} alt="" className="max-w-6"></img>))
                        }
                    </div>
                    </div>
                    
                </div>
            </article>
        </>
    );
}

export default Card;