import React from "react";
import "./Base.css";

export const BaseCard = ({ base }) => {
    return (
        <>
            <div className="base-container">
                <section className="base">
                    <h3>{base.colorName}</h3>
                    <p>Manufacturer: {base.brand}</p>
                </section>
                <div className="image-container">
                    <img src={base.image} alt={base.name}></img>
                </div>
            </div>
        </>
    )
}