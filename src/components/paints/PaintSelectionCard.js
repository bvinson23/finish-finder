import React from "react";
import { Link } from "react-router-dom";

export const PaintSelectionCard = ({ selection, handleSelectPaint }) => {
    return (
        <div className="selection-box">
            <div className="preview-area">
                <div>
                    <h4>{selection.name}</h4>
                    <p>Manufacturer: {selection.brand}</p>
                </div>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectPaint(selection)}> -Add Paint- </button>
                <img src={selection.image} alt={selection.name}></img>
            </div>
            <div className="navigation-buttons">
                <Link to={"/"}>
                    <button type="button" className="button-back"> -Back- </button>
                </Link>
                <Link to={"/boards/create/base"}>
                    <button type="button" className="button-next"> -Next- </button>
                </Link>
            </div>
        </div>
    )
}