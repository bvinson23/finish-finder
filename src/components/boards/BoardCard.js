import React from "react";
import "./Board.css";
import { Link } from "react-router-dom";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export const BoardCard = ({ board, handleDeleteBoard }) => {
    return (
        <>
            <div className="board">
                <div className="board-title">
                    <div className="board-title__components">
                        <h2>{board.name}</h2>
                        <p>
                            <Link to={`/boards/${board.id}/edit`}>
                                <button><FaPen /></button>
                            </Link>
                            <button type="button" className="button-delete" onClick={() => handleDeleteBoard(board.id)}><FaTrashAlt /></button>
                        </p>
                    </div>
                </div>
                <div className="board-content">
                    <section className="board-section">
                        <article className="board-paint">
                            <img src={board.paint?.image} alt={board.paint?.name}></img>
                            <div className="details">
                                <h4>Paint</h4>
                                <p>Manufacturer: {board.paint?.brand}</p>
                                <p>Color: {board.paint?.name}</p>
                            </div>
                        </article>
                    </section>
                    <section className="board-section">
                        <article className="board-base">
                            <img src={board.base?.image} alt={board.base?.name}></img>
                            <div className="details">
                                <h4>Vinyl Base</h4>
                                <p>Manufacturer: {board.base?.brand}</p>
                                <p>Color: {board.base?.colorName}</p>
                            </div>
                        </article>
                    </section>
                    <section className="board-section">
                        <article className="board-carpet">
                            <img src={board.carpet?.image} alt={board.carpet?.name}></img>
                            <div className="details">
                                <h4>Carpet</h4>
                                <p>Manufacturer: {board.carpet?.brand}</p>
                                <p>Style: {board.carpet?.name}</p>
                                <p>Color: {board.carpet?.colorName}</p>
                                <p>Price: ${board.carpet?.price}/SY</p>
                                {/* <p>{board.carpet.styleId}</p> */}
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )

}