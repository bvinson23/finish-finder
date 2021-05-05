import React from "react";
import { Link } from "react-router-dom";

export const CarpetSelectionCard = ({ selection, handleSelectCarpet }) => {
    return (
        <div className="selection-box">
            <div className="preview-area">
                <div>
                    <h5>{selection.name} - {selection.colorName}</h5>
                    <p>Manufacturer: {selection.brand}</p>
                    <p>Style: {selection.name}</p>
                    <p>Color: {selection.colorName}</p>
                    <p>Pattern: {selection.style.name}</p>
                    <p>Price: ${selection.price}/SY</p>
                </div>
                <button type="button"
                    className="select-button"
                    onClick={() => handleSelectCarpet(selection)}> -Add Carpet- </button>
                <img src={selection.image} alt={selection.name}></img>
            </div>
            <div className="navigation-buttons">
                {/* <Link to={"/boards/create/base"}>
                    <button type="button" className="button-back"> -Back- </button>
                    <button type="hidden" className="button-next-hidden"> -Next- </button>
                </Link> */}
            </div>
        </div>
    )
}