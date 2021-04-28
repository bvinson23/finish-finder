import React from "react";
import "./Carpet.css";

export const CarpetCard = ({ carpet }) => {
    return (
        <>
            <div className="carpet-container">
                <section className="carpet">
                    <h3>Name: {carpet.name}</h3>
                    <p>Brand: {carpet.brand}</p>
                    <p>Color: {carpet.gencolor.name}</p>
                    <p>Style: {carpet.style.name}</p>
                    <p>Price: ${carpet.price}</p>
                </section>
                <div className="image-container">
                    <img src={carpet.image} alt={carpet.name}></img>
                </div>
            </div>
        </>
    )
}