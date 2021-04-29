import React from "react";
import { Link } from "react-router-dom";

export const BaseSelectionCard = ({ selection, handleSelectBase }) => {
    return (
        <div className="selection-box">
            <h3>Preview Area</h3>
            <div className="preview-area">
                <h4>{selection.name}</h4>
                <img src={selection.image} alt={selection.name}></img>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectBase(selection)}>Add Base</button>
            </div>
            <div className="navigation-buttons">
                <Link to={"boards/create/paint"}>
                    <button type="button" className="button-back">Back</button>
                </Link>
                <Link to={"/boards/create/carpet"}>
                    <button type="button" className="button-next">Next</button>
                </Link>
            </div>
        </div>
    )
}