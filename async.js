const redux = require('redux')
const createStore = redux.createStore

//REACT THHUNK - ASYNC MW<

//ACtion types
const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

//Action creator
function fetchRequest() {
    return {
        type: FETCH_REQUEST
    }
}

function fetchSuccess(products) {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

function fetchError() {
    return {
        type: FETCH_ERROR
    }
}

//STATE
const initState = {
    loading: false,
    products: [],
    error: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state

    }
}
//STORE
 const store = createStore(reducer)

 //SUBSCRIBE
 store.subscribe(() => {
     console.log(store.getState())
 })

 //DISPATCH ACTIONS
 store.dispatch(fetchRequest())

 setTimeout(() => {
     store.dispatch(fetchSuccess([
         { id: 1, name: 'Product 1' },
         { id: 2, name: 'Product 2' }
     ]))
 }, 2000)

 setTimeout(() => {
     store.dispatch(fetchError())
 }, 4000)
