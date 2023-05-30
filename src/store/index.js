import reducer  from './reducers/index.js'
import allReducers from './reducers/index.js'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco no number 
    number: 0
}

export {
    reducer, 
    initialState,
    allReducers
}

