import { useState } from "react";
import PlayerBoard from "./PlayerBoard";
import ChooseDeck from "./ChooseDeck";

function Lobby() {
   
        const [view, setView] = useState('choose');

        if (view === 'join') {
            return (
                <div id='join'>
                    <input type="text" placeholder="Enter code" />
                </div>
            );
        }
        else if (view === 'create') {
            return (
                <div id='create'> 
                    <ChooseDeck />
                </div>
            );
        }
        return ( 
            <div id='lobby'>
                <h1>Choose to join or Create a Lobby</h1>
                <button onClick={() => setView('join')}>Join Lobby</button>
                <button onClick={() => setView('create')}>Create Lobby</button>
            </div>
        );
}

export default Lobby;