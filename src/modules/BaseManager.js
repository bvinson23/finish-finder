//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single base based on id
export const getBaseById = (baseId) => {
    return fetch(`${remoteURL}/paints/${baseId}`)
        .then(res => res.json())
}

//fetch call that gets all bases
export const getAllBases = () => {
    return fetch(`${remoteURL}/bases?_expand=gencolor`)
        .then(res => res.json())
}