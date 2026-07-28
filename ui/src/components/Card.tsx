function Card({ url, name, leftMargin = 0, id }: { url: string, name: string, leftMargin?: number, id: string }) {
    return (
        <div className="card" id={id} style={{ marginLeft: leftMargin }}>
            <img src={url} alt={name} style={{ marginLeft: leftMargin }}/>
        </div>
    );
}

export default Card;
