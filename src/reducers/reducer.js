const initialState = {
    characters: [],
    comics: [],
    randomCharacter: {},
    selectedCharacter: {},
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "get-characters":
            return{
                ...state,
                characters: action.payload,
                randomCharacter: action.payload[9],
                selectedCharacter: action.payload[9]
            }
        case "get-comics":
            return{
                ...state,
                comics: action.payload
            }
        case "get-random-character":
            const num = Math.ceil(Math.random(0, 98) * 100)
            return({
                ...state,
                randomCharacter: state.characters[num]
            })
        case "select-character":
            return({
                ...state,
                selectedCharacter: state.characters[action.payload]
            })
        default:
            return state
    }
}