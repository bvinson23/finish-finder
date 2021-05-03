import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { getAllBases } from "../../modules/BaseManager";
import { getAllCarpets, getAllPrices } from "../../modules/CarpetManager";
import { PaintSelectionCard } from "../paints/PaintSelectionCard";
import { BaseSelectionCard } from "../bases/BaseSelectionCard";
import { CarpetSelectionCard } from "../carpets/CarpetSelectionCard"
import { SelectionPreviewCard } from "./SelectionPreviewCard";
import "./BoardForm.css";

export const BoardEditForm = () => {
    const [board, setBoard] = useState({});
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

    const { boardId } = useParams();
    const history = useHistory();

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
}