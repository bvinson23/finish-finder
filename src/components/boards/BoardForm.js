import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { getAllBases } from "../../modules/BaseManager";
import { getAllCarpets, getAllPrices } from "../../modules/CarpetManager";
import { addBoard } from "../../modules/BoardManager";
import { PaintSelectionCard } from "../paints/PaintSelectionCard";
import { BaseSelectionCard } from "../bases/BaseSelectionCard";
import { CarpetSelectionCard } from "../carpets/CarpetSelectionCard"
import { SelectionPreviewCard } from "./SelectionPreviewCard";

export const BoardForm = () => {
    const [paint, setPaint] = useState({});
    const [paintSelection, setPaintSelection] = useState({});
    const [paintResults, setPaintResults] = useState([]);
    const [base, setBase] = useState({});
    const [baseSelection, setBaseSelection] = useState({});
    const [baseResults, setBaseResults] = useState([]);
    const [carpet, setCarpet] = useState({});
    const [carpetResults, setCarpetResults] = useState([]);
    const [prices, setPrices] = useState([]);
    const [colors, setColors] = useState([]);
    const [colorSelection, setColorSelection] = useState({});
    const [priceSelection, setPriceSelection] = useState({});
    const [board, setBoard] = useState({
        name: "",
        paintId: 0,
        carpetId: 0,
        baseId: 0,
        userId: parseInt(sessionStorage.getItem("app_user_id"))
    })

    const history = useHistory();

    //------Board functions------
    const handleFieldChange = evt => {
        const newBoard = { ...board }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newBoard[evt.target.id] = selectedVal
        setBoard(newBoard)
    }
    const handleClickSaveBoard = evt => {
        evt.preventDefault()

        const name = board.name
        const paintId = board.paintId
        const carpetId = board.carpetId
        const baseId = board.baseId

        if (name.length <=0 || paintId === 0 || carpetId === 0 || baseId === 0) {
            window.alert("Please select one of each finish")
        } else {
            addBoard(board)
                .then(() => history.pushState("/"))
        }
    }

    //------Paint functions------
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
                        }
                    })
                    setPaintResults(colorPaints)
                })
        } else setPaintResults([])
    }

    const handleSelectPaint = (selection) => {
        setPaint(selection)
    }

    //------Base functions------
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

    //------Carpet functions------
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

    //------Paint useEffects------
    useEffect(() => {
        handleSelectPaint(paint)
    }, [paint])
    
    useEffect(() => {
        paintSelectionResults(paintSelection)
    }, [paintSelection])
    
    
    //------Base useEffects------
    useEffect(() => {
        handleSelectBase(base)
    }, [base])
    
    useEffect(() => {
        baseSelectionResults(baseSelection)
    }, [baseSelection])
    
    //------Carpet useEffects------
    useEffect(() => {
        handleSelectCarpet(carpet)
    }, [carpet])
    
    useEffect(() => {
        carpetSelectionResults(colorSelection, priceSelection)
    }, [colorSelection, priceSelection])
    
    useEffect(() => {
        getAllPrices()
        .then(pricesFromAPI => {
            setPrices(pricesFromAPI)
        });
    }, [])
    
    //------Shared useEffects------
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

            <div className="preview-card">
                <SelectionPreviewCard
                    paint={paint}
                    base={base}
                    carpet={carpet}
                    handleClickSaveBoard={handleClickSaveBoard} />
            </div>
        </>
    )
}