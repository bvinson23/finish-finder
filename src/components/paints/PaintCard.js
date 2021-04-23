import React from "react";
import "./Paint.css";

export const PaintCard = ({ paint }) => {
    return (
        <>
            <h2>Paints</h2>
            <div className="paint-container">
                <section className="paint">
                    <h3>Name: {paint.name}</h3>
                    <p>Color: {paint.gencolor.name}</p>
                    <p>Price: ${paint.price}</p>
                    <p>Brand: {paint.brand}</p>
                </section>
                <div className="image-container">
                    <img src="" alt="paint"></img>
                </div>
            </div>
        </>
    )
}