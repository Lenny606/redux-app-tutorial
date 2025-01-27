const redux = require('redux')


const ORDER = "ORDER"
const BUNS = "BUNS"

//action => object
const actionOrder = {
    type: ORDER,
    shop_name: "test name"
}
const actionBuns = {
    type: BUNS,
    shop_name: "test name"
}

//action creator manages the action object
function orderCreator() {
    return {
        type: ORDER,
        shop_name: "test name"
    }
}

function bunsCreator() {
    return {
        type: BUNS,
        shop_name: "test buns"
    }
}

//reducer
const initialStateOrder = {
    base: 1000,
    cheese: ['cheddar', 'gouda', 'brie'],
}
const initialStateBuns = {
    buns: 1000,
}
const reducerOrder = (state = initialStateOrder, action) => {
    switch (action.type) {
        case ORDER:
            return {
                ...state,
                base: state.base + 100
            }
        default:
            return state
    }
}
const reducerBuns = (state = initialStateBuns, action) => {
    switch (action.type) {
        case BUNS:
            return {
                ...state,
                buns: state.buns + 5
            }
        default:
            return state
    }
}


//STORE - init state is in reducer function passed
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const rootReducer = combineReducers({
    order: reducerOrder,
    buns: reducerBuns
})
const store = createStore(rootReducer)

console.log("inital state", store.getState())

//register listener if state is changed + save in const , can be unsubscribed
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))


//update state via dispatch + action
store.dispatch(orderCreator())
store.dispatch(orderCreator())
unsubscribe();
store.dispatch(orderCreator())
store.dispatch(orderCreator())

console.log("last state", store.getState())