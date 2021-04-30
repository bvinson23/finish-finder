import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { getAllCarpets, getAllPrices } from "../../modules/CarpetManager";
import { PaintSelectionCard } from "../paints/PaintSelectionCard";
import { BaseSelectionCard } from "../bases/BaseSelectionCard";
import { CarpetSelectionCard } from "../carpets/CarpetSelectionCard"
import { SelectionPreviewCard } from "./SelectionPreviewCard";

export const BoardForm = () => {
    const [paint, setPaint] = useState({});
    const [base, setBase] = useState({});
    const [carpet, setCarpet] = useState({});
    const [colors, setColors] = useState([]);
    const [paintSelection, setPaintSelection] = useState({});
    const [paintResults, setPaintResults] = useState([]);

    const handleColorSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setPaintSelection(selectionChange)
    }

    const paintSelectionResults = (color) => {
        if (color > 0) {
            getAllPaints()
                .then(res => {
                    let colorPaints = res.filter(paint => {
                        if (paint.gencolorId === color) {
                            return true
                        }
                    })
                    setPaintResults(colorPaints)
                })
        } else setPaintResults([])
    }

    const handleSelectPaint = (selection) => {
        setPaint(selection)
    }

    useEffect(() => {
        handleSelectPaint(paint)
    }, [paint])

    useEffect(() => {
        paintSelectionResults(paintSelection)
    }, [paintSelection])

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    return (
        <>
            <div className="form-container">
                <h4>Choose a Paint:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={paintSelection}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleColorSelection}
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
                {paintResults.length === 0 ? <div></div> :
                    paintResults.map(selection =>
                        <PaintSelectionCard
                            key={selection.id}
                            selection={selection}
                            handleSelectPaint={handleSelectPaint}
                        />
                    )}
            </div>
            <div className="preview-card">
                <SelectionPreviewCard
                    paint={paint}
                    base={base}
                    carpet={carpet} />
            </div>
        </>
    )
}