function Card({ url, name, leftMargin = 0 }: { url: string, name: string, leftMargin?: number }) {
    return (
        <div className="card" style={{ marginLeft: leftMargin }}>
            <img src={url} alt={name} style={{ marginLeft: leftMargin }}/>
        </div>
    );
}

export default Card;