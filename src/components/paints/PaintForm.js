import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { PaintSelectionCard } from "./PaintSelectionCard";

export const PaintForm = () => {
    const [paint, setPaint] = useState({
        name: "",
        gencolorId: "",
        brand: "",
        image: ""
    });
    const [colors, setColors] = useState([]);
    const [selection, setSelection] = useState({});
    const [results, setResults] = useState([]);
    const history = useHistory();

    const handleColorSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setSelection(selectionChange)
    }

    const selectionResults = (selection) => {
        if (selection > 0) {
            getAllPaints()
                .then(res => {
                    let colorPaints = res.filter(paint => {
                        if (paint.gencolorId === selection) {
                            return true
                        }
                    })
                    setResults(colorPaints)
                })
        } else setResults([])
    }

    useEffect(() => {
        selectionResults(selection)
    }, [selection])

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
                    <select value={selection}
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
                {results.length === 0 ? <div></div> :
                    results.map(selection =>
                        <PaintSelectionCard
                            key={selection.id}
                            selection={selection}
                        // handleAddPaint={handleAddPaint}
                        />
                    )}
            </div>
            <div className="form-group">
                <aside className="selections-container">
                    <h3>Selections</h3>
                    <div className="selection__paint">
                        <h4>Paint</h4>
                        <p>paint selection(placeholder)</p>
                        <div className="selection__image">
                            <img src="" alt="paint"></img>
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