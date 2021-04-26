//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single board based on id
export const getBoardById = (boardId) => {
    return fetch(`${remoteURL}/boards/${boardId}`)
        .then(res => res.json())
}

//fetch call that gets all boards
export const getAllBoards = () => {
    return fetch(`${remoteURL}/boards?_expand=paint&_expand=base&_expand=carpet`)
        .then(res => res.json())
}