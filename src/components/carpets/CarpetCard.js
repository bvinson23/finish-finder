import React from "react";
import "./Carpet.css";

export const CarpetCard = ({ carpet }) => {
    return (
        <>
            <div className="carpet-container">
                <section className="carpet">
                    <h3>{carpet.name} - {carpet.colorName}</h3>
                    <p>Manufacturer: {carpet.brand}</p>
                    <p>Style: {carpet.name}</p>
                    <p>Color: {carpet.colorName}</p>
                    <p>Pattern: {carpet.style.name}</p>
                    <p>Price: ${carpet.price}/SY</p>
                </section>
                <div className="image-container">
                    <img src={carpet.image} alt={carpet.name}></img>
                </div>
            </div>
        </>
    )
}