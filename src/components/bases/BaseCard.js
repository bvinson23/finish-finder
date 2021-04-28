import React from "react";
import "./Base.css";

export const BaseCard = ({ base }) => {
    return (
        <>
            <div className="base-container">
                <section className="base">
                    <h3>Name: {base.name}</h3>
                    <p>Color: {base.colorName}</p>
                    <p>Manufacturer: {base.brand}</p>
                </section>
                <div className="image-container">
                    <img src={base.image} alt={base.name}></img>
                </div>
            </div>
        </>
    )
}