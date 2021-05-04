//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single board based on id
export const getBoardById = (boardId) => {
    return fetch(`${remoteURL}/boards/${boardId}?_expand=paint&_expand=base&_expand=carpet`)
        .then(res => res.json())
}

//fetch call that gets all boards
export const getAllBoards = () => {
    return fetch(`${remoteURL}/boards?_expand=paint&_expand=base&_expand=carpet`)
        .then(res => res.json())
}

//fetch call that adds a new board
export const addBoard = (newBoard) => {
    return fetch(`${remoteURL}/boards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBoard)
    }).then(res => res.json())
}

//fetch call that deletes a board
export const deleteBoard = id => {
    return fetch(`${remoteURL}/boards/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

//fetch call that edits an existing board
export const updateBoard = (editedBoard) => {
    return fetch(`${remoteURL}/boards/${editedBoard.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedBoard)
    }).then(res => res.json())
}