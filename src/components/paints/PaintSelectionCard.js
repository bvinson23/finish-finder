import React from "react";
import { Link } from "react-router-dom";

export const PaintSelectionCard = ({ selection, handleSelectPaint }) => {
    return (
        <div className="selection-box">
            <h3>Preview Area</h3>
            <div className="preview-area">
                <h4>{selection.name}</h4>
                <img src={selection.image} alt={selection.name}></img>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectPaint(selection)}>Add Paint</button>
            </div>
            <div className="navigation-buttons">
                <Link to={"/"}>
                    <button type="button" className="button-back">Back</button>
                </Link>
                <Link to={"/boards/create/base"}>
                    <button type="button" className="button-next">Next</button>
                </Link>
            </div>
        </div>
    )
}