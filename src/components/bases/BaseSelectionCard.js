import React from "react";
import { Link } from "react-router-dom";

export const BaseSelectionCard = ({ selection, handleSelectBase }) => {
    return (
        <div className="selection-box">
            <div className="preview-area">
                <div>
                    <h5>{selection.name}</h5>
                    <p>Manufacturer: {selection.brand}</p>
                    <p>Color: {selection.colorName}</p>
                </div>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectBase(selection)}> -Add Base- </button>
                <img src={selection.image} alt={selection.name}></img>
            </div>
            <div className="navigation-buttons">
                <Link to={"boards/create/paint"}>
                    <button type="button" className="button-back"> -Back- </button>
                </Link>
                <Link to={"/boards/create/carpet"}>
                    <button type="button" className="button-next"> -Next- </button>
                </Link>
            </div>
        </div>
    )
}