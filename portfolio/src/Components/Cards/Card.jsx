
function Card({data}) {
    return (
        <>
            <article>
                <div className="card">
                    <img className="w-full h-[60%] object-cover rounded-xl" src={data.img} alt="Change this with data passed in"></img>
                    <h2 className='text-left text-lg md:text-lg mt-2 px-4'>{data.title}</h2>
                    <p className='text-left text-(--text-muted) text-base px-4'>{data.description}</p>
                    <div className='flex'>
                        <img></img>

                    </div>
                </div>
            </article>
        </>
    );
}

export default Card;