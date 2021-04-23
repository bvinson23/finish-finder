import React from "react";
import "./Paint.css";

export const PaintCard = () => {
    return (
        <>
            <h2>Paints</h2>
            <div className="paint-container">
                <section className="paint">
                    <h3>Paint Name</h3>
                    <p>Color</p>
                    <p>Price</p>
                    <p>Brand</p>
                </section>
                <div className="image-container">
                    <img src="" alt="paint"></img>
                </div>
            </div>
        </>
    )
}