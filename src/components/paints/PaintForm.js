import React, { useState, useEffect } from "react";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { PaintSelectionCard } from "./PaintSelectionCard";

export const PaintForm = () => {
    const [paint, setPaint] = useState({});
    const [paintResults, setPaintResults] = useState([]);
    const [paintSelection, setPaintSelection] = useState({});
    const [colors, setColors] = useState([]);

    const handlePaintColorSelection = (evt) => {
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
                        } else {
                            return false
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
                        onChange={handlePaintColorSelection}
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
            <div className="form-group">
                <aside className="selections-container">
                    <h3>Selections</h3>
                    <div className="selection__paint">
                        <h4>Paint</h4>
                        <p>{paint.name}</p>
                        <div className="selection__image">
                            <img src={paint.image} alt={paint.name}></img>
                        </div>
                    </div>
                    <div className="selection__base">
                        <h4>Vinyl Base</h4>
                        <p>base selection(placeholder)</p>
                        <div className="selection__image">
                            <img src="" alt="base"></img>
                        </div>
                    </div>
                    <div className="selection__carpet">
                        <h4>Carpet</h4>
                        <p>carpet selection(placeholder)</p>
                        <div className="selection__image">
                            <img src="" alt="carpet"></img>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}