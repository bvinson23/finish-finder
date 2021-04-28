import React from "react";
import "./Board.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export const BoardCard = ({ board }) => {
    return (
        <>
            <div className="board">
                <div className="board-title">
                    <div className="board-title__components">
                        <h2>{board.name}</h2>
                        <p><FaPen /><FaTrashAlt /></p>
                    </div>
                </div>
                <div className="board-content">
                    <section className="board-section">
                        <article className="board-carpet">
                            <img src={board.carpet.image} alt={board.carpet.name}></img>
                            <div className="carpet-details">
                                <h4>{board.carpet.name}</h4>
                                <p>Color: {board.carpet.colorName}</p>
                                <p>Manufacturer: {board.carpet.brand}</p>
                                <p>Price: ${board.carpet.price}</p>
                                {/* <p>{board.carpet.styleId}</p> */}
                            </div>
                        </article>
                    </section>
                    <section className="board-section">
                        <article className="board-paint">
                            <img src={board.paint.image} alt={board.paint.name}></img>
                            <div className="paint-details">
                                <h4>{board.paint.name}</h4>
                                <p>Manufacturer: {board.paint.brand}</p>
                            </div>
                        </article>
                    </section>
                    <section className="board-section">
                        <article className="board-base">
                            <img src={board.base.image} alt={board.base.name}></img>
                            <div className="base-details">
                                <h4>{board.base.name}</h4>
                                <p>Color: {board.base.colorName}</p>
                                <p>Manufacturer: {board.base.brand}</p>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )

}