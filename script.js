const redux = require('redux')


const ORDER = "ORDER"

//action => object
const action = {
    type: ORDER,
    shop_name: "test name"
}

//action creator manages the action object
function orderCreator() {
    return {
        type: ORDER,
        shop_name: "test name"
    }
}

//reducer
const initialState = {
    base: 1000,
    buns: 1000,
    cheese: ['cheddar', 'gouda', 'brie'],
}
const reducer = (state = initialState, action) => {
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


//STORE - init state is in reducer function passed
const createStore = redux.createStore
const store = createStore(reducer)

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