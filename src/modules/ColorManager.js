//variable for the url of the json-server
const remoteURL = "http://localhost:8088"

//fetch call that gets a single color based on id
export const getColorById = (colorId) => {
    return fetch(`${remoteURL}/gencolors/${colorId}`)
        .then(res => res.json())
}

//fetch call that gets all colors
export const getAllColors = () => {
    return fetch(`${remoteURL}/gencolors`)
        .then(res => res.json())
}