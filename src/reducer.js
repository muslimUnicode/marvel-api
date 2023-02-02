const initialState = {
    characters: [],
    comics: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "get-characters":
            return{
                ...state,
                characters: [...state.characters, action.payload]
            }
        case "get-comics":
            return{
                ...state,
                comics: [state.comics, action.payload]
            }
        default:
            return state
    }
}

export default reducer