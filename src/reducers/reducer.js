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
            }
        case "get-comics":
            return{
                ...state,
                comics: action.payload
            }
        case "get-random-character":
            return({
                ...state,
                randomCharacter: state.characters[Math.floor(Math.random(0, 98) * 100)]
            })
        case "select-character":
            return({
                ...state,
                selectedCharacter: state.characters[action.payload]
            })
        case "set-character-wiki":
            return({
                ...state,
                characterWiki: state.characters.filter(item => item.name === action.payload)[0]
            })
        default:
            return state
    }
}