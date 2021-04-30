import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllBases } from "../../modules/BaseManager";
import { BaseSelectionCard } from "./BaseSelectionCard";

export const BaseForm = () => {
    const [base, setBase] = useState({});
    const [colors, setColors] = useState([]);
    const [selection, setSelection] = useState({});
    const [results, setResults] = useState([]);
    const history = useHistory();

    const handleColorSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setSelection(selectionChange)
    }

    const selectionResults = (color) => {
        if (color > 0) {
            getAllBases()
            .then(res => {
                let colorBases = res.filter(base => {
                    if (base.gencolorId === color) {
                        return true
                    }
                })
                setResults(colorBases)
            })
        } else setResults([])
    }
    
    const handleSelectBase = (selection) => {
        setBase(selection)
    }
    
    useEffect(() => {
        handleSelectBase(base)
    }, [base])
    
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
                <h4>Choose a Vinyl Base:</h4>
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
                        <BaseSelectionCard
                            key={selection.id}
                            selection={selection}
                            handleSelectBase={handleSelectBase}
                        />
                    )}
            </div>
            <div className="form-group">
                <aside className="selections-container">
                    <h3>Selections</h3>
                    <div className="selection__paint">
                        <h4>Paint</h4>
                        {/* <p>{paint.name}</p> */}
                        <div className="selection__image">
                            {/* <img src={paint.image} alt={paint.name}></img> */}
                        </div>
                    </div>
                    <div className="selection__base">
                        <h4>Vinyl Base</h4>
                        <p>{base.name}</p>
                        <div className="selection__image">
                            <img src={base.image} alt={base.name}></img>
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