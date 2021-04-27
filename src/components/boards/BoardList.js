import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BoardCard } from "./BoardCard";
import { getAllBoards } from "../../modules/BoardManager";

export const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const history = useHistory();

    const getBoards = () => {
        return getAllBoards().then(boardsfromAPI => {
            setBoards(boardsfromAPI)
        });
    };

    useEffect(() => {
        getBoards();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => history.push("/boards/create")}>
                        Create a Board
                    </button>
            </section>
            <div className="container-cards">
                {boards.map(board => <BoardCard key={board.id} board={board} />)}
            </div>
        </>
    )
}