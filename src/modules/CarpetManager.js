//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single carpet based on id
export const getCarpetById = (carpetId) => {
    return fetch(`${remoteURL}/paints/${carpetId}`)
        .then(res => res.json())
}

//fetch call that gets all carpets
export const getAllCarpets = () => {
    return fetch(`${remoteURL}/carpets?_expand=gencolor`)
        .then(res => res.json())
}