import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";
import { CarpetCard } from "../carpets/CarpetCard";

export const PaintForm = () => {
    const [paint, setPaint] = useState({
        name: "",
        gencolorId: "",
        brand: "",
        image: ""
    });
    const [colors, setColors] = useState([]);
    const [filter, setFilter] = useState("");
    const [result, setResult] = useState([]);
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

    const handleFilter = evt => {
        let filterChange = evt.target.value
        setFilter(filterChange)
    }

    const filterResults = (filter) => {
        if (filter.id > 0) {
            getAllPaints()
                .then(res => {
                    let filterPaints = res.filter(paint => {
                        if (paint.id === filter.id) {
                            return true
                        }
                    })
                    setResult(filterPaints)
                })
        }
        else setResult([])
    }

    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    useEffect(() => {
        filterResults(filter)
    }, [filter])

    //MISSING INFO FROM THIS FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!
    const handleAddPaint = id => {
        const newPaintPreview = {
        }
    }

    //With this return, I'm working on getting the dropdown to filter the paints by color, not working currently
    return (
        <>
            <div className="form-container">
                <h4>Choose a Paint:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={paint.gencolorId}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleFilter}
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
                {result.length === 0 ? <div></div> :
                    result.map(filter =>
                        <CarpetCard
                            key={filter.id}
                            filter={filter}
                            handleAddPaint={handleAddPaint}
                        />
                    )}
            </div>
        </>
    )
}