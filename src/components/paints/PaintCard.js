import React from "react";
import "./Paint.css";
import colorNaval from "./paintImages/colorNaval"

export const PaintCard = ({ paint }) => {
    return (
        <>
            <div className="paint-container">
                <section className="paint">
                    <h3>Name: {paint.name}</h3>
                    <p>Color: {paint.gencolor.name}</p>
                    <p>Brand: {paint.brand}</p>
                </section>
                <div className="image-container">
                    <img src={paint.image} alt={paint.name}></img>
                </div>
            </div>
        </>
    )
}