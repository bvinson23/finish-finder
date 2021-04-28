import React from "react";
import "./Board.css";

export const BoardCard = ({ board }) => {
    return (
        <>
            <div className="board">
                <h2>Board Title</h2>
                <section className="board-section">
                    <article className="board-carpet">
                        <img src={board.carpet.image} alt={board.carpet.name}></img>
                        <div className="carpet-details">
                            <h3>{board.carpet.name}</h3>
                            <p></p>
                            <p>{board.carpet.brand}</p>
                            <p>${board.carpet.price}</p>
                            <p>{board.carpet.styleId}</p>
                        </div>
                    </article>
                </section>
                <section className="board-section">
                    <article className="board-paint">
                        <img src={board.paint.image} alt={board.paint.name}></img>
                        <div className="paint-details">
                            <h3>{board.paint.name}</h3>
                            <p>{board.paint.brand}</p>
                        </div>
                    </article>
                </section>
                <section className="board-section">
                    <article className="board-base">
                        <img src={board.base.image} alt={board.base.name}></img>
                        <div className="base-details">
                            <h3>{board.base.name}</h3>
                            <p>{board.base.brand}</p>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )

}