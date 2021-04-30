import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllBases } from "../../modules/BaseManager";
import { BaseSelectionCard } from "./BaseSelectionCard";

export const BaseForm = () => {
    const [base, setBase] = useState({});
    const [colors, setColors] = useState([]);
    const [baseSelection, setBaseSelection] = useState({});
    const [baseResults, setBaseResults] = useState([]);
    const history = useHistory();

    const handleBaseColorSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setBaseSelection(selectionChange)
    }

    const baseSelectionResults = (color) => {
        if (color > 0) {
            getAllBases()
            .then(res => {
                let colorBases = res.filter(base => {
                    if (base.gencolorId === color) {
                        return true
                    }
                })
                setBaseResults(colorBases)
            })
        } else setBaseResults([])
    }
    
    const handleSelectBase = (selection) => {
        setBase(selection)
    }
    
    useEffect(() => {
        handleSelectBase(base)
    }, [base])
    
    useEffect(() => {
        baseSelectionResults(baseSelection)
    }, [baseSelection])

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    return (
        <>
            <div className="form-container">
                <h4>Choose a Vinyl Base:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={baseSelection}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleBaseColorSelection}
                        className="filter-control">
                        <option value="0">Select a color</option>
                        {colors.map(color => (
                            <option key={color.id} value={color.id}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="filter-results">
                {baseResults.length === 0 ? <div></div> :
                    baseResults.map(selection =>
                        <BaseSelectionCard
                            key={selection.id}
                            selection={selection}
                            handleSelectBase={handleSelectBase}
                        />
                    )}
            </div>
        </>
    )
}