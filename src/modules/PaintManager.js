//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single paint based on id
export const getPaintById = (paintId) => {
    return fetch(`${remoteURL}/paints/${paintId}`)
        .then(res => res.json())
}

//fetch call that gets all paints
export const getAllPaints = () => {
    return fetch(`${remoteURL}/paints?_expand=gencolor`)
        .then(res => res.json())
}