import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";

export const PaintForm = () => {
    const [paint, setPaint] = useState({
        name: "",
        gencolorId: "",
        brand: "",
        image: ""
    });

    const [colors, setColors] = useState([]);

    const history = useHistory();

    const handleFieldChange = evt => {
        const newPaint = { ...paint }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newPaint[evt.target.id] = selectedVal
        setPaint(newPaint)
    }

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    const handleClickSavePaint = evt => {
        evt.preventDefault()
        addPaint
    }

    return (
        <div className="form-container">
                <h4>Choose a Paint:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={paint.gencolorId}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleFieldChange}
                        className="filter-control">
                            <option value="0">Select a color</option>
                            {colors.map(color => {
                                <option key={color.id} value={color.id}>
                                    {color.name}
                                </option>
                            })}
                        </select>
                </div>
            </div>
    )
}