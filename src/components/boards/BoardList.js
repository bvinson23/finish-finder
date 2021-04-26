import React, { useState, useEffect} from "react";
import { BoardCard } from "./BoardCard";
import { getAllBoards } from "../../modules/BoardManager";

export const BoardList = () => {
    const [boards, setBoards] = useState([]);

    const getBoards = () => {
        return getAllBoards().then(boardsfromAPI => {
            setBoards(boardsfromAPI)
        });
    };

    useEffect(() => {
        getBoards();
    }, []);

    return (
        <div className="container-cards">
            {boards.map(board => <BoardCard key={board.id} board={board} />)}
        </div>
    )
}