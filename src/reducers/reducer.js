const initialState = {
    characters: [],
    comics: [],
    randomCharacter: [{}],
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "get-characters":
            return{
                ...state,
                characters: action.payload,
                randomCharacter: action.payload[9]
            }
        case "get-comics":
            return{
                ...state,
                comics: action.payload,
            }
        case "get-random-character":
            return({
                ...state,
                randomCharacter: state.characters[Math.floor(Math.random(0, 99) * 100)]
            })
        default:
            return state
    }
}