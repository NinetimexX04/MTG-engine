import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Welcome to MTG sandbox</h1>
            <h2>- by Alexander Van der Merwe</h2>
            <button onClick={() => navigate('/lobby')}>Play now</button>
        </div> 
    );
}

export default Home;