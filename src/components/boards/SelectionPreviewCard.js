import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { addBoard } from "../../modules/BoardManager";
import "./BoardForm.css";

export const SelectionPreviewCard = ({ paint, base, carpet }) => {
    const [board, setBoard] = useState({
        name: "",
        paintId: "",
        carpetId: "",
        baseId: "",
        userId: parseInt(sessionStorage.getItem("app_user_id"))
    })

    const history = useHistory();

    const handleFieldChange = evt => {
        let newBoard = {
            paintId: paint.id,
            carpetId: carpet.id,
            baseId: base.id,
            name: board.name,
            userId: parseInt(sessionStorage.getItem("app_user_id"))
        }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newBoard[evt.target.id] = selectedVal
        setBoard(newBoard)
    }
    const handleClickSaveBoard = evt => {
        evt.preventDefault()

        // const paintId = board.paintId
        // const carpetId = board.carpetId
        // const baseId = board.baseId

        // if (paintId <= 0 || carpetId <= 0 || baseId <= 0) {
        //     window.alert("Please select one of each finish")
        // } else {
        addBoard(board)
            .then(() => history.push("/"))
        // }
    }

    return (
        <form className="boardForm">
            <aside className="selections-container">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Title:</label>
                        <input
                            type="text"
                            id="name"
                            onChange={handleFieldChange}
                            required autoFocus
                            className="form-control"
                            placeholder="Name your board"
                            value={board.name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="selection__paint">
                        <select
                            id="paint"
                            className="hide-me"
                            onInput={handleFieldChange}
                            value={board.paintId}>
                            <option value="paint.id"></option>
                        </select>
                        <h4>Paint</h4>
                        <p><strong>{paint.name}</strong></p>
                        <div className="selection__image">
                            <img src={paint.image} alt={paint.name}></img>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="selection__base">
                        <select
                            id="base"
                            className="hide-me"
                            onChange={handleFieldChange}
                            value={board.baseId} />
                        <h4>Vinyl Base</h4>
                        <p><strong>{base.name}</strong></p>
                        <div className="selection__image">
                            <img src={base.image} alt={base.name}></img>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="selection__carpet">
                        <select
                            id="carpet"
                            className="hide-me"
                            onChange={handleFieldChange}
                            value={board.carpetId} />
                        <h4>Carpet</h4>
                        <p><strong>{carpet.name}</strong></p>
                        <div className="selection__image">
                            <img src={carpet.image} alt={carpet.name}></img>
                        </div>
                    </div>
                </fieldset>
                <Link to={"/"}>
                    <button type="button" className="button-save" onClick={handleClickSaveBoard}> -Save Board- </button>
                </Link>
            </aside>
        </form>
    )
}