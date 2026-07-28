import { PlayerBoard } from "./playerBoard.js";

interface playerBoardsDict {
    [key: string]: PlayerBoard;
}

export class Game {
    static readonly MAX_PLAYERS = 2;
    playerBoards: playerBoardsDict;
    instanceId: string;

    constructor(board: PlayerBoard[]) {
        if (!Array.isArray(board)) {
            throw new Error("Input needs to be an array of type Playerbaord");
        }
        if (Game.MAX_PLAYERS !== board.length) {
            throw new Error("Mismatch between the amount fo players and the amount of player-boards sent.");
        }
        
        this.playerBoards = {}
        for (let i=0; i < board.length; i++){
            this.playerBoards[board[i].instanceId] = board[i];
        }
        this.instanceId = crypto.randomUUID();
    }
}