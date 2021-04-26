import React from "react";
import "./Board.css";

export const BoardCard = ({ board }) => {
    return (
        <>
            <h2>Board Title</h2>
            <section className="board">
                <article className="board-carpet">
                    <img src="" alt="carpet picture"></img>
                    <div className="carpet-details">
                        <h3>Carpet Name</h3>
                        <p>Color</p>
                        <p>Brand</p>
                        <p>Price</p>
                        <p>Style</p>
                    </div>
                </article>
            </section>
            <section className="board">
                <article className="board-paint">
                    <img src="" alt="paint picture"></img>
                    <div className="paint-details">
                        <h3>Paint Name</h3>
                        <p>Color</p>
                        <p>Brand</p>
                    </div>
                </article>
            </section>
            <section className="board">
                <article className="board-base">
                    <img src="" alt="base picture"></img>
                    <div className="base-details">
                        <h3>Base Name</h3>
                        <p>Color</p>
                        <p>Brand</p>
                    </div>
                </article>
            </section>
        </>
    )

}