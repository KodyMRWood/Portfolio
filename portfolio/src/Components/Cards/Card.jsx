function Card({data}) {
    return (
        <>
            <article>
                <div className="card">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </article>
        </>
    );
}

export default Card;