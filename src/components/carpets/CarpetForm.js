import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllCarpets } from "../../modules/CarpetManager";
import { CarpetSelectionCard } from "./CarpetSelectionCard";

export const CarpetForm = () => {
    const [carpet, setCarpet] = useState({});
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
            getAllCarpets()
                .then(res => {
                    let colorCarpets = res.filter(carpet => {
                        if (carpet.gencolorId === color) {
                            return true
                        }
                    })
                    setResults(colorCarpets)
                })
        } else setResults([])
    }

    const handleSelectCarpet = (selection) => {
        setCarpet(selection)
    }

    useEffect(() => {
        handleSelectCarpet(carpet)
    }, [carpet])

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
                <h4>Choose a Carpet:</h4>
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
                        <CarpetSelectionCard
                            key={selection.id}
                            selection={selection}
                            handleSelectCarpet={handleSelectCarpet}
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
                        <p>base selection(placeholder)</p>
                        <div className="selection__image">
                            <img src="" alt="base"></img>
                        </div>
                    </div>
                    <div className="selection__carpet">
                        <h4>Carpet</h4>
                        <p>{carpet.name}</p>
                        <div className="selection__image">
                            <img src={carpet.image} alt={carpet.name}></img>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <button type="button" className="button-save"> -Save Board- </button>
                    </Link>
                </aside>
            </div>
        </>
    )
}