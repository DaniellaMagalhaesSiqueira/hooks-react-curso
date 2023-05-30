
export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'por25':
            return { ...state, number: state.number / 25 }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'addN':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}