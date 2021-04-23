import React from "react";
import "./Board.css";

export const BoardCard = () => {
    return (
        <>
            <h2>Board Title</h2>
            <section className="board">
                <article className="board-paint">
                    <img src="" alt="paint picture"></img>
                    <div className="paint-details">
                        <h3>Paint Name</h3>
                        <p>Color</p>
                        <p>Brand</p>
                        <p>Price</p>
                    </div>
                </article>
            </section>
        </>
    )

}