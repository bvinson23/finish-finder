import React from "react";
import { Link } from "react-router-dom";

export const CarpetSelectionCard = ({ selection, handleSelectCarpet }) => {
    return (
        <div className="selection-box">
            <h3>Preview Area</h3>
            <div className="preview-area">
                <h4>{selection.name}</h4>
                <img src={selection.image} alt={selection.name}></img>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectCarpet(selection)}>Add Carpet</button>
            </div>
            <div className="navigation-buttons">
                <Link to={"/boards/create/base"}>
                    <button type="button" className="button-back">Back</button>
                </Link>
            </div>
        </div>
    )
}