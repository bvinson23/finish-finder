import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllCarpets, getAllPrices } from "../../modules/CarpetManager";
import { CarpetSelectionCard } from "./CarpetSelectionCard";

export const CarpetForm = () => {
    const [carpet, setCarpet] = useState({});
    const [colors, setColors] = useState([]);
    const [prices, setPrices] = useState([]);
    const [colorSelection, setColorSelection] = useState({});
    const [priceSelection, setPriceSelection] = useState({});
    const [carpetResults, setCarpetResults] = useState([]);
    const history = useHistory();

    const handleCarpetColorSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setColorSelection(selectionChange)
    }

    const handlePriceSelection = (evt) => {
        let selectionChange = parseInt(evt.target.value)
        setPriceSelection(selectionChange)
    }

    const carpetSelectionResults = (color, price) => {
        if (color > 0 && price > 0) {
            getAllCarpets()
                .then(res => {
                    let colorPriceCarpets = res.filter(carpet => {
                        if (carpet.gencolorId === color && carpet.genpriceId === price) {
                            return true
                        }
                    })
                    setCarpetResults(colorPriceCarpets)
                })
        } else setCarpetResults([])
    }

    const handleSelectCarpet = (selection) => {
        setCarpet(selection)
    }

    useEffect(() => {
        handleSelectCarpet(carpet)
    }, [carpet])

    useEffect(() => {
        carpetSelectionResults(colorSelection, priceSelection)
    }, [colorSelection, priceSelection])

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllPrices()
            .then(pricesFromAPI => {
                setPrices(pricesFromAPI)
            });
    }, [])

    return (
        <>
            <div className="form-container">
                <h4>Choose a Carpet:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={colorSelection}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleCarpetColorSelection}
                        className="filter-control">
                        <option value="0">Select a color</option>
                        {colors.map(color => (
                            <option key={color.id} value={color.id}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-dropdown">
                    <label htmlFor="price">Price</label>
                    <select value={priceSelection}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handlePriceSelection}
                        className="filter-control">
                        <option value="0">Select a price point</option>
                        {prices.map(price => (
                            <option key={price.id} value={price.id}>
                                {price.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="filter-results">
                {carpetResults.length === 0 ? <div></div> :
                    carpetResults.map(selection =>
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