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
        const editedBoard = { ...board }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        editedBoard[evt.target.id] = selectedVal
        setBoard(editedBoard)
    }
    const updateExistingBoard = evt => {
        evt.preventDefault()

        const editedBoard = {
            id: boardId,
            name: board.name,
            paintId: !(paint.name?.length) > 0 ? board.paintId : paint.id,
            baseId: !(base.name?.length) > 0 ? board.baseId : base.id,
            carpetId: !(carpet.name?.length) > 0 ? board.carpetId : carpet.id,
            userId: parseInt(sessionStorage.getItem("app_user_id"))
        }
        updateBoard(editedBoard)
            .then(() => history.push("/"))
        // }
    }
    useEffect(() => {
        getBoardById(boardId)
            .then(board => {
                setBoard(board);
            })
    }, [boardId])

    return (
        <>
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
                    <Link to={"/"}>
                        <button type="button" className="button-save" onClick={updateExistingBoard}> -Save Board- </button>
                    </Link>
                    {!(paint.name?.length) > 0 ?
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
                                <p><strong>{board.paint?.name}</strong></p>
                                <div className="selection__image">
                                    <img src={board.paint?.image} alt={board.paint?.name}></img>
                                </div>
                            </div>
                        </fieldset> :
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
                    }
                    {!(base.name?.length) > 0 ?
                        <fieldset>
                            <div className="selection__base">
                                <select
                                    id="base"
                                    className="hide-me"
                                    onChange={handleFieldChange}
                                    value={board.baseId} />
                                <h4>Vinyl Base</h4>
                                <p><strong>{board.base?.colorName}</strong></p>
                                <div className="selection__image">
                                    <img src={board.base?.image} alt={board.base?.name}></img>
                                </div>
                            </div>
                        </fieldset> :
                        <fieldset>
                            <div className="selection__base">
                                <select
                                    id="base"
                                    className="hide-me"
                                    onChange={handleFieldChange}
                                    value={board.baseId} />
                                <h4>Vinyl Base</h4>
                                <p><strong>{base.colorName}</strong></p>
                                <div className="selection__image">
                                    <img src={base.image} alt={base.name}></img>
                                </div>
                            </div>
                        </fieldset>
                    }
                    {!(carpet.name?.length) > 0 ?
                        <fieldset>
                            <div className="selection__carpet">
                                <select
                                    id="carpet"
                                    className="hide-me"
                                    onChange={handleFieldChange}
                                    value={board.carpetId} />
                                <h4>Carpet</h4>
                                <p><strong>{board.carpet?.name} - {board.carpet?.colorName}</strong></p>
                                <div className="selection__image">
                                    <img src={board.carpet?.image} alt={board.carpet?.name}></img>
                                </div>
                            </div>
                        </fieldset> :
                        <fieldset>
                            <div className="selection__carpet">
                                <select
                                    id="carpet"
                                    className="hide-me"
                                    onChange={handleFieldChange}
                                    value={board.carpetId} />
                                <h4>Carpet</h4>
                                <p><strong>{carpet.name} - {carpet.colorName}</strong></p>
                                <div className="selection__image">
                                    <img src={carpet.image} alt={carpet.name}></img>
                                </div>
                            </div>
                        </fieldset>
                    }
                </aside>
            </form>
        </>
    )
}