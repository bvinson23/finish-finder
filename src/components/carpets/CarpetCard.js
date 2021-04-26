import React from "react";
import "./Carpet.css";

export const CarpetCard = ({ carpet }) => {
    return (
        <>
            <div className="carpet-container">
                <section className="carpet">
                    <h3>Name: {carpet.name}</h3>
                    <p>Color: {carpet.gencolor.name}</p>
                    <p>Style: {carpet.style.name}</p>
                    <p>Brand: {carpet.brand}</p>
                    <p>Price:</p>
                </section>
                <div className="image-container">
                    <img src="" alt={carpet.name}></img>
                </div>
            </div>
        </>
    )
}