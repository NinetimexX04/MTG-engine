function Card({ url, name }: { url: string, name: string }) {
    return (
        <div className="card">
            <img src={url} alt={name} />
        </div>
    );
}

export default Card;