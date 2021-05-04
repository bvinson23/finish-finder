import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getBoardById, updateBoard } from "../../modules/BoardManager";
import "./BoardForm.css";

export const EditSelectionPreviewCard = ({ paint, base, carpet }) => {

    const [board, setBoard] = useState({
        name: "",
        paintId: "",
        carpetId: "",
        baseId: "",
        userId: parseInt(sessionStorage.getItem("app_user_id"))
    });

    const history = useHistory();
    const { boardId } = useParams();

    const handleFieldChange = evt => {
        let editedBoard = {
            paintId: board.paintId,
            carpetId: board.carpetId,
            baseId: board.baseId,
            name: board.name,
            userId: parseInt(sessionStorage.getItem("app_user_id"))
        }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        editedBoard[evt.target.id] = selectedVal
        setBoard(editedBoard)
    }
    const updateExistingBoard = evt => {
        evt.preventDefault()

        // const paintId = board.paintId
        // const carpetId = board.carpetId
        // const baseId = board.baseId

        // if (paintId <= 0 || carpetId <= 0 || baseId <= 0) {
        //     window.alert("Please select one of each finish")
        // } else {
        updateBoard(board)
            .then(() => history.push("/"))
        // }
    }
    useEffect(() => {
        getBoardById(boardId)
            .then(board => {
                console.log(board)
                setBoard(board);
            })
    }, [boardId])

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
                        <p>{board.paint?.name}</p>
                        <div className="selection__image">
                            <img src={board.paint?.image} alt={board.paint?.name}></img>
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
                        <p>{board.base?.name}</p>
                        <div className="selection__image">
                            <img src={board.base?.image} alt={board.base?.name}></img>
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
                        <p>{board.carpet?.name}</p>
                        <div className="selection__image">
                            <img src={board.carpet?.image} alt={board.carpet?.name}></img>
                        </div>
                    </div>
                </fieldset>
                <Link to={"/"}>
                    <button type="button" className="button-save" onClick={updateExistingBoard}> -Save Board- </button>
                </Link>
            </aside>
        </form>
    )
}