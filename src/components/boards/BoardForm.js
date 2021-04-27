import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllBases } from "../../modules/BaseManager";
import { getAllCarpets } from "../../modules/CarpetManager";
import { getAllColors } from "../../modules/ColorManager";
import { getAllPaints } from "../../modules/PaintManager";

export const BoardForm = () => {
    const [board, setBoard] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const [paints, setPaints] = useState([]);
    const [paint, setPaint] = useState({});
    const [carpets, setCarpets] = useState([]);
    const [bases, setBases] = useState([]);
    const [colors, setColors] = useState([]);

    const history = useHistory();

    const handleFieldChange = event => {
        const newBoard = { ...board }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newBoard[event.target.id] = selectedVal
        setBoard(newBoard)
    }

    useEffect(() => {
        getAllPaints()
            .then(paintsFromAPI => {
                setPaints(paintsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllCarpets()
            .then(carpetsFromAPI => {
                setCarpets(carpetsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllBases()
            .then(basesFromAPI => {
                setBases(basesFromAPI)
            });
    }, []);
    
    useEffect(() => {
        getAllColors()
            .then(colorsFromAPI => {
                setColors(colorsFromAPI)
            });
    }, []);

    const handleClickSave = event => {
        event.preventDefault()
        setIsLoading(true);

        const paintId = board.paintId
        const carpetId = board.carpetId
        const baseId = board.baseId

        if (paintId === 0 || carpetId === 0 || baseId === 0) {
            window.alert("Please select all fields")
        } else {
            addBoard(board)
                .then(() => history.push("/"))
        }
    }

    return (
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
            <div className="form-container">
                <h4>Choose a Paint:</h4>
                <div className="filter-dropdown">
                    <label htmlFor="color">Color</label>
                    <select value={paint.gencolorId}
                        name="gencolorId"
                        id="gencolorId"
                        onChange={handleFieldChange}
                        className="filter-control">
                            <option value="0">Select a color</option>
                            {colors.map(color => {
                                <option key={color.id} value={color.id}>
                                    {color.name}
                                </option>
                            })}
                        </select>
                </div>
            </div>
        </div>
    )
}