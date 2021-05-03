import React from "react";
import "./Paint.css";

export const PaintCard = ({ paint }) => {
    return (
        <>
            <div className="paint-container">
                <section className="paint">
                    <h3>Name: {paint.name}</h3>
                    <p>Manufacturer: {paint.brand}</p>
                </section>
                <div className="image-container">
                    <img src={paint.image} alt={paint.name}></img>
                </div>
            </div>
        </>
    )
}