import React from "react";
import "./Base.css";

export const PaintCard = ({ base }) => {
    return (
        <>
            <h2>Vinyl Bases</h2>
            <div className="base-container">
                <section className="base">
                    <h3>Name: {base.name}</h3>
                    <p>Color: {base.gencolor.name}</p>
                    <p>Brand: {base.brand}</p>
                </section>
                <div className="image-container">
                    <img src={} alt={base.name}></img>
                </div>
            </div>
        </>
    )
}