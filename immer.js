const produce = require('immer').produce
const redux = require('redux')
const createStore = redux.createStore

const BREAD_UPDATE = "BREAD_UPDATE"
const initState = {

    type: "veggie",
    ingredients: {
        bread: "Whole",
        sauce: "Red"
    }
}

const updateBread = (bread) => {
    return {
        type: BREAD_UPDATE,
        payload: bread
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case BREAD_UPDATE:
            return produce(state, draft => {
                draft.ingredients.bread = action.payload
            })
        default:
            return state
    }
}
const store = redux.createStore(reducer)
store.dispatch(updateBread())