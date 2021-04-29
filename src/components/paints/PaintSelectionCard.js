import React from "react";

export const PaintSelectionCard = ({ selection }) => {
    return (
        <div className="selection-box">
            <h4>{selection.name}</h4>
            <img src={selection.image} alt={selection.name}></img>
            <button type="button" className="select-button">Add Paint</button>
        </div>
    )
}