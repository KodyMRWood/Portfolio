import {Link} from 'react-router';

function Card({data}) {
    return (
        <>
            <article>
                <Link to={`/Portfolio/${data.title}`} className="">
                <div className="card">
                    <img className="w-full h-[60%] object-cover rounded-xl" src={data.img} alt="Change this with data passed in"></img>
                    <div className="mt-2 px-2">
                        <h2 className='text-left text-lg md:text-lg'>{data.title}</h2>
                        <p className='text-left text-(--text-muted) text-base'>{data.shortDescription}</p>
                        <div className='flex flex-row gap-2 pt-4'>
                        {data.tech.map((tech) => (
                            <img key= {data.title + {tech}.tech } src={tech} alt="" className="max-w-6"></img>))
                        }
                        </div>
                    </div>
                </div>
                </Link>
            </article>
        </>
    );
}

export default Card;